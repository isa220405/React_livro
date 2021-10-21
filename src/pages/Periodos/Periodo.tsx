import React from "react";
import {Link} from "react-router-dom";
import * as S from './style';
import livro from "../../assets/img/livro.svg";
import email from "../../assets/img/email.svg";
import instagram from "../../assets/img/instagram.svg";
import lupa from "../../assets/img/lupa.svg";
const Periodo = () => {
    return (
      <><><S.Header>
       <S.img src={livro}></S.img>   
      </S.Header>
      <S.nav>
      <S.a1><Link to="/Foruns">PERÍODOS</Link></S.a1>
      <S.a2><Link to="/Sessao">INDICAÇÕES</Link></S.a2>
      <S.a3><Link to="/Sobre">RESUMOS</Link></S.a3>
      <S.img3 src={lupa}></S.img3>
      <S.h11>Pesquise</S.h11>
      </S.nav>
      <S.Section>
      <S.h1>O BRASIL E A LITERATURA</S.h1>
            <S.buttonum>
             PERÍODO 1
            </S.buttonum>
            <S.buttondois>
            PERÍODO 2  
            </S.buttondois>
            <S.buttontres>
            PERÍODO 3  
            </S.buttontres>
            <S.buttonquatro>
            PERÍODO 4  
            </S.buttonquatro>
            <S.buttoncinco>
            PERÍODO 5
            </S.buttoncinco>
            <S.buttonseis>
            PERÍODO 6
            </S.buttonseis>
            <S.buttonsete>
            PERÍODO 7
            </S.buttonsete>
            <S.buttonoito>
            PERÍODO 8
            </S.buttonoito>
            <S.buttonnove>
            PERÍODO 9
            </S.buttonnove>
      </S.Section></>
      <S.footer>
      <S.buttona>AJUDA</S.buttona>
      <S.img1 src={email}></S.img1>
      <S.img2 src={instagram}></S.img2>
      </S.footer></>
    );
  };

export default Periodo();
