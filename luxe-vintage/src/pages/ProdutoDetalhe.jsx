import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { produtos } from '../data/produtos';
import { useCarrinho } from '../context/CarrinhoContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  FiArrowLeft, 
  FiCheck, 
  FiCalendar, 
  FiAward, 
  FiHeart, 
  FiShare2, 
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiMove
} from 'react-icons/fi';

const ProdutoDetalhe = () => {
  const { id } = useParams();
  const [imagemAtiva, setImagemAtiva] = useState(0);
  const [lightboxAberto, setLightboxAberto] = useState(false);
  const [zoomPosicao, setZoomPosicao] = useState({ x: 50, y: 50 });
  const [arrastando, setArrastando] = useState(false);
  const imagemRef = useRef(null);
  const containerRef = useRef(null);
  
  const produto = produtos.find(p => p.id === parseInt(id));
  
  const { adicionarAoCarrinho } = useCarrinho();
  const { usuario } = useAuth();
  const navigate = useNavigate();

  if (!produto) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
        <h2>Produto não encontrado</h2>
        <Link to="/produtos" className="btn-luxury">Voltar para Coleção</Link>
      </div>
    );
  }

  const handleAdicionarAoCarrinho = () => {
    if (!usuario) {
      navigate('/?login=true');
      return;
    }
    adicionarAoCarrinho(produto.id);
  };

  const handleComprarAgora = () => {
    if (!usuario) {
      navigate('/?login=true');
      return;
    }
    adicionarAoCarrinho(produto.id);
    navigate('/carrinho');
  };

  const handleImagemClick = (index) => {
    setImagemAtiva(index);
  };

  const abrirLightbox = (index) => {
    setImagemAtiva(index);
    setLightboxAberto(true);
    setZoomPosicao({ x: 50, y: 50 });
    document.body.style.overflow = 'hidden';
  };

  const fecharLightbox = () => {
    setLightboxAberto(false);
    setArrastando(false);
    document.body.style.overflow = 'auto';
  };

  const proximaImagem = () => {
    setImagemAtiva((prev) => (prev === produto.imagens.length - 1 ? 0 : prev + 1));
    setZoomPosicao({ x: 50, y: 50 });
  };

  const imagemAnterior = () => {
    setImagemAtiva((prev) => (prev === 0 ? produto.imagens.length - 1 : prev - 1));
    setZoomPosicao({ x: 50, y: 50 });
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setArrastando(true);
  };

  const handleMouseMove = (e) => {
    if (!arrastando || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Limitar entre 0% e 100%
    const xLimitado = Math.min(100, Math.max(0, x));
    const yLimitado = Math.min(100, Math.max(0, y));

    setZoomPosicao({ x: xLimitado, y: yLimitado });
  };

  const handleMouseUp = () => {
    setArrastando(false);
  };

  const handleMouseLeave = () => {
    setArrastando(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="produto-detalhe-page"
    >
      <div className="container">
        <Link to="/produtos" className="voltar-link">
          <FiArrowLeft /> Voltar para Coleção
        </Link>

        <div className="produto-detalhe-grid">
          {/* Galeria de Imagens */}
          <div className="produto-imagens">
            <motion.div 
              className="imagem-principal-container"
              key={imagemAtiva}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => abrirLightbox(imagemAtiva)}
            >
              <img 
                src={produto.imagens[imagemAtiva]} 
                alt={produto.nome} 
                className="imagem-principal"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/500x500?text=Imagem+não+encontrada';
                }}
              />
              <div className="imagem-overlay">
                <FiMove className="zoom-icone" />
                <span>Clique para ampliar</span>
              </div>
              <button className="btn-favorito" onClick={(e) => e.stopPropagation()}>
                <FiHeart />
              </button>
            </motion.div>
            
            {produto.imagens.length > 1 && (
              <div className="miniaturas">
                {produto.imagens.map((img, index) => (
                  <motion.img 
                    key={index}
                    src={img} 
                    alt={`${produto.nome} - imagem ${index + 1}`}
                    className={`miniatura ${imagemAtiva === index ? 'ativa' : ''}`}
                    onClick={() => handleImagemClick(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/100x100?text=Erro';
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Informações do Produto */}
          <div className="produto-info-detalhe">
            <span className="produto-categoria">{produto.categoria}</span>
            <h1>{produto.nome}</h1>
            <p className="designer">{produto.designer}</p>
            
            <div className="info-tags">
              <span className="tag">
                <FiAward /> {produto.condicao}
              </span>
              <span className="tag">
                <FiCalendar /> {produto.ano}
              </span>
            </div>

            <p className="preco-detalhe">
              R$ {produto.preco.toLocaleString('pt-BR')}
            </p>

            <div className="descricao-completa">
              <h3>Descrição</h3>
              <p>{produto.descricao}</p>
            </div>

            <div className="detalhes-lista">
              <h3>Detalhes do Produto</h3>
              <ul>
                {produto.detalhes?.map((detalhe, index) => (
                  <li key={index}>
                    <FiCheck /> {detalhe}
                  </li>
                ))}
              </ul>
            </div>

            <div className="acoes-compra">
              <button 
                onClick={handleComprarAgora}
                className="btn-comprar-agora"
              >
                Comprar Agora
              </button>
              <button 
                onClick={handleAdicionarAoCarrinho}
                className="btn-adicionar-carrinho"
              >
                Adicionar ao Carrinho
              </button>
            </div>

            <div className="compartilhar">
              <span>Compartilhar:</span>
              <button className="btn-share">
                <FiShare2 />
              </button>
            </div>
          </div>
        </div>

        {/* Seção de Produtos Relacionados */}
        {produtos.filter(p => p.categoria === produto.categoria && p.id !== produto.id).length > 0 && (
          <div className="produtos-relacionados">
            <h2 className="section-title">Você também pode gostar</h2>
            <div className="relacionados-grid">
              {produtos
                .filter(p => p.categoria === produto.categoria && p.id !== produto.id)
                .slice(0, 4)
                .map((relacionado) => (
                  <motion.div
                    key={relacionado.id}
                    className="relacionado-card"
                    whileHover={{ y: -5 }}
                  >
                    <Link to={`/produto/${relacionado.id}`}>
                      <img 
                        src={relacionado.imagens[0]} 
                        alt={relacionado.nome}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/200x200?text=Imagem+não+encontrada';
                        }}
                      />
                      <h4>{relacionado.nome}</h4>
                      <p className="relacionado-preco">
                        R$ {relacionado.preco.toLocaleString('pt-BR')}
                      </p>
                    </Link>
                  </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* LIGHTBOX - Tela cheia com zoom por arrasto */}
      <AnimatePresence>
        {lightboxAberto && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={fecharLightbox}
          >
            <div 
              className="lightbox-container" 
              onClick={(e) => e.stopPropagation()}
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              {/* Botão fechar */}
              <button className="lightbox-close" onClick={fecharLightbox}>
                <FiX />
              </button>

              {/* Instrução de zoom */}
              <div className="lightbox-instrucao">
                <FiMove /> Clique e arraste para ver em zoom
              </div>

              {/* Navegação */}
              {produto.imagens.length > 1 && (
                <>
                  <button className="lightbox-nav prev" onClick={imagemAnterior}>
                    <FiChevronLeft />
                  </button>
                  <button className="lightbox-nav next" onClick={proximaImagem}>
                    <FiChevronRight />
                  </button>
                </>
              )}

              {/* Container da imagem com zoom por arrasto */}
              <div 
                className={`lightbox-image-wrapper ${arrastando ? 'arrastando' : ''}`}
                onMouseDown={handleMouseDown}
                style={{ cursor: arrastando ? 'grabbing' : 'grab' }}
              >
                <div 
                  className="lightbox-zoom-container"
                  style={{
                    transform: `scale(2)`,
                    transformOrigin: `${zoomPosicao.x}% ${zoomPosicao.y}%`,
                  }}
                >
                  <img 
                    ref={imagemRef}
                    src={produto.imagens[imagemAtiva]} 
                    alt={produto.nome}
                    className="lightbox-image"
                    draggable="false"
                  />
                </div>
              </div>

              {/* Contador de imagens */}
              <div className="lightbox-counter">
                {imagemAtiva + 1} / {produto.imagens.length}
              </div>

              {/* Miniaturas no lightbox */}
              <div className="lightbox-thumbnails">
                {produto.imagens.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Miniatura ${index + 1}`}
                    className={`lightbox-thumb ${imagemAtiva === index ? 'ativa' : ''}`}
                    onClick={() => setImagemAtiva(index)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProdutoDetalhe;