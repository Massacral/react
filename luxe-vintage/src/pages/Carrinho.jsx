import React, { useState, useEffect } from 'react'; // <-- ADICIONADO useEffect
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiTrash2, 
  FiArrowLeft, 
  FiShoppingBag, 
  FiCreditCard, 
  FiSmartphone,
  FiCheckCircle,
  FiInfo 
} from 'react-icons/fi';
import { useCarrinho } from '../context/CarrinhoContext';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Carrinho = () => {
  const [metodoPagamento, setMetodoPagamento] = useState('pix');
  const [parcelas, setParcelas] = useState(1);
  const [termosAceitos, setTermosAceitos] = useState(false);
  
  const { 
    itens, 
    removerDoCarrinho, 
    atualizarQuantidade,
    getTotalItens,
    getPrecoTotal,
    finalizarCompra,
    loading 
  } = useCarrinho();
  
  const { usuario } = useAuth();
  const navigate = useNavigate();

  // Verificar se já aceitou os termos anteriormente
  useEffect(() => {
    const termosJaAceitos = localStorage.getItem('@LuxeVintage:termosAceitos');
    if (termosJaAceitos === 'true') {
      setTermosAceitos(true);
    }
  }, []);

  const precoTotal = getPrecoTotal();
  const valorParcela = precoTotal / parcelas;

  const handleFinalizarCompra = async () => {
    if (!usuario) {
      toast.error('Faça login para finalizar a compra');
      navigate('/?login=true');
      return;
    }

    if (!termosAceitos) {
      toast.error('Você precisa aceitar os termos para continuar');
      return;
    }

    const sucesso = await finalizarCompra();
    if (sucesso) {
      // Reset para próxima compra
      localStorage.removeItem('@LuxeVintage:termosAceitos');
      navigate('/pedidos');
    }
  };

  const formatarPreco = (valor) => {
    return valor.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  if (itens.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="carrinho-vazio"
      >
        <FiShoppingBag size={80} />
        <h2>Seu carrinho está vazio</h2>
        <p>Explore nossa coleção e encontre peças exclusivas</p>
        <Link to="/produtos" className="btn-luxury">
          Explorar Coleção
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="carrinho-page"
    >
      <div className="container">
        <Link to="/produtos" className="voltar-link">
          <FiArrowLeft /> Continuar Comprando
        </Link>

        <h1 className="carrinho-titulo">
          Sacola de Compras ({getTotalItens()} {getTotalItens() === 1 ? 'item' : 'itens'})
        </h1>

        <div className="carrinho-grid">
          {/* Itens do Carrinho */}
          <div className="carrinho-itens">
            {itens.map((item) => (
              <motion.div
                key={item.id}
                className="carrinho-item"
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <img src={item.imagem} alt={item.nome} className="item-imagem" />
                
                <div className="item-info">
                  <h3>{item.nome}</h3>
                  <p className="item-designer">{item.designer}</p>
                  <p className="item-preco">
                    R$ {item.preco.toLocaleString('pt-BR')}
                  </p>
                </div>

                <div className="item-quantidade">
                  <button 
                    onClick={() => atualizarQuantidade(item.id, item.quantidade - 1)}
                    className="qtd-btn"
                  >
                    -
                  </button>
                  <span>{item.quantidade}</span>
                  <button 
                    onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}
                    className="qtd-btn"
                  >
                    +
                  </button>
                </div>

                <div className="item-subtotal">
                  <p>Subtotal:</p>
                  <p className="subtotal-valor">
                    R$ {(item.preco * item.quantidade).toLocaleString('pt-BR')}
                  </p>
                </div>

                <button 
                  onClick={() => removerDoCarrinho(item.id)}
                  className="item-remover"
                >
                  <FiTrash2 />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Resumo e Pagamento */}
          <div className="carrinho-resumo">
            <h2>Resumo do Pedido</h2>
            
            <div className="resumo-linha">
              <span>Subtotal:</span>
              <span>R$ {formatarPreco(precoTotal)}</span>
            </div>
            
            <div className="resumo-linha">
              <span>Frete:</span>
              <span className="frete-gratis">Grátis</span>
            </div>
            
            <div className="resumo-linha total">
              <span>Total:</span>
              <span>R$ {formatarPreco(precoTotal)}</span>
            </div>

            {/* Formas de Pagamento */}
            <div className="pagamento-section">
              <h3>Forma de Pagamento</h3>
              
              <div className="metodos-pagamento">
                <label className={`metodo-pagamento ${metodoPagamento === 'pix' ? 'selecionado' : ''}`}>
                  <input
                    type="radio"
                    name="pagamento"
                    value="pix"
                    checked={metodoPagamento === 'pix'}
                    onChange={(e) => setMetodoPagamento(e.target.value)}
                  />
                  <FiSmartphone className="metodo-icone" />
                  <div className="metodo-info">
                    <strong>PIX</strong>
                    <small>Pagamento instantâneo</small>
                  </div>
                  <span className="desconto">5% OFF</span>
                </label>

                <label className={`metodo-pagamento ${metodoPagamento === 'cartao' ? 'selecionado' : ''}`}>
                  <input
                    type="radio"
                    name="pagamento"
                    value="cartao"
                    checked={metodoPagamento === 'cartao'}
                    onChange={(e) => setMetodoPagamento(e.target.value)}
                  />
                  <FiCreditCard className="metodo-icone" />
                  <div className="metodo-info">
                    <strong>Cartão de Crédito</strong>
                    <small>Até 10x sem juros</small>
                  </div>
                </label>
              </div>

              {/* Opções de parcelamento (só aparece se escolher cartão) */}
              {metodoPagamento === 'cartao' && (
                <motion.div 
                  className="parcelas-section"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="parcelas">Número de parcelas:</label>
                  <select 
                    id="parcelas"
                    value={parcelas}
                    onChange={(e) => setParcelas(Number(e.target.value))}
                    className="parcelas-select"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>
                        {num}x de R$ {formatarPreco(precoTotal / num)} {num === 1 ? '(à vista)' : 'sem juros'}
                      </option>
                    ))}
                  </select>
                  <p className="parcelas-info">
                    <FiInfo /> Parcelamento em até 10x sem juros
                  </p>
                </motion.div>
              )}

              {/* Resumo do pagamento */}
              <div className="resumo-pagamento">
                {metodoPagamento === 'pix' && (
                  <motion.div 
                    className="pix-resumo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <FiCheckCircle className="pix-check" />
                    <div>
                      <p>Você ganhou <strong>5% de desconto</strong> pagando com PIX!</p>
                      <p className="preco-com-desconto">
                        De: <span className="preco-antigo">R$ {formatarPreco(precoTotal)}</span><br />
                        Por: <span className="preco-novo">R$ {formatarPreco(precoTotal * 0.95)}</span>
                      </p>
                    </div>
                  </motion.div>
                )}

                {metodoPagamento === 'cartao' && (
                  <div className="cartao-resumo">
                    <p>
                      <strong>{parcelas}x de R$ {formatarPreco(valorParcela)}</strong>
                      {parcelas === 1 ? ' (à vista)' : ' sem juros'}
                    </p>
                    <p className="total-parcelado">
                      Total: R$ {formatarPreco(precoTotal)}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Termos e condições */}
            <div className="termos-section">
              <label className="termos-checkbox">
                <input
                  type="checkbox"
                  checked={termosAceitos}
                  onChange={(e) => setTermosAceitos(e.target.checked)}
                />
                <span>
                  Li e aceito os <Link to="/termos" target="_blank" rel="noopener noreferrer">termos e condições</Link> de compra
                </span>
              </label>
            </div>

            {/* Botão finalizar */}
            <button 
              onClick={handleFinalizarCompra}
              className="btn-finalizar"
              disabled={loading || !termosAceitos}
            >
              {loading ? 'Processando...' : 'FINALIZAR COMPRA'}
            </button>

            <p className="resumo-obs">
              *Frete grátis para todo o Brasil<br />
              *Compra 100% segura
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Carrinho;