import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import toast from 'react-hot-toast';
import { produtos } from '../data/produtos';

const API_URL = 'http://localhost:3001/api';

const CarrinhoContext = createContext();

export const useCarrinho = () => useContext(CarrinhoContext);

export const CarrinhoProvider = ({ children }) => {
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(false);
  const { usuario } = useAuth();

  // Carregar carrinho do localStorage ao iniciar
  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem('@LuxeVintage:carrinho');
    if (carrinhoSalvo) {
      setItens(JSON.parse(carrinhoSalvo));
    }
  }, []);

  // Salvar carrinho no localStorage quando mudar
  useEffect(() => {
    localStorage.setItem('@LuxeVintage:carrinho', JSON.stringify(itens));
  }, [itens]);

  const adicionarAoCarrinho = (produtoId, quantidade = 1) => {
    const produto = produtos.find(p => p.id === produtoId);
    
    if (!produto) {
      toast.error('Produto não encontrado');
      return;
    }

    setItens(prevItens => {
      const itemExistente = prevItens.find(item => item.id === produtoId);
      
      if (itemExistente) {
        toast.success('Quantidade atualizada no carrinho!');
        return prevItens.map(item =>
          item.id === produtoId
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        );
      } else {
        toast.success('Produto adicionado ao carrinho!');
        return [...prevItens, {
          id: produto.id,
          nome: produto.nome,
          preco: produto.preco,
          imagem: produto.imagens[0],
          designer: produto.designer,
          quantidade
        }];
      }
    });
  };

  const removerDoCarrinho = (produtoId) => {
    setItens(prevItens => prevItens.filter(item => item.id !== produtoId));
    toast.success('Produto removido do carrinho!');
  };

  const atualizarQuantidade = (produtoId, quantidade) => {
    if (quantidade < 1) {
      removerDoCarrinho(produtoId);
      return;
    }

    setItens(prevItens =>
      prevItens.map(item =>
        item.id === produtoId ? { ...item, quantidade } : item
      )
    );
  };

  const limparCarrinho = () => {
    setItens([]);
    toast.success('Carrinho esvaziado!');
  };

  const getTotalItens = () => {
    return itens.reduce((total, item) => total + item.quantidade, 0);
  };

  const getPrecoTotal = () => {
    return itens.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  };

  const finalizarCompra = async () => {
    if (!usuario) {
      toast.error('Faça login para finalizar a compra');
      return false;
    }

    if (itens.length === 0) {
      toast.error('Carrinho vazio');
      return false;
    }

    try {
      setLoading(true);
      
      const pedido = {
        usuarioId: usuario.id,
        data: new Date().toISOString(),
        total: getPrecoTotal(),
        status: 'aguardando pagamento',
        itens: itens.map(item => ({
          produtoId: item.id,
          nome: item.nome,
          preco: item.preco,
          quantidade: item.quantidade
        }))
      };

      // Simular envio para o servidor
      await axios.post(`${API_URL}/pedidos`, pedido);
      
      toast.success('Compra finalizada com sucesso!');
      limparCarrinho();
      return true;
    } catch (error) {
      toast.error('Erro ao finalizar compra');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <CarrinhoContext.Provider value={{
      itens,
      loading,
      adicionarAoCarrinho,
      removerDoCarrinho,
      atualizarQuantidade,
      limparCarrinho,
      getTotalItens,
      getPrecoTotal,
      finalizarCompra
    }}>
      {children}
    </CarrinhoContext.Provider>
  );
};