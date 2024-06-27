import Image from "next/image";
import styled from "styled-components";
import Head from "next/head";

export default function Home(){
    return (
        <>
        <StyledApresentacao>
            <h1>Olá meu nome é Jhonatan</h1>
            <h2>Sou Desenvolvedor Full-Stack e Mobile</h2>
        </StyledApresentacao>
        <StyledGeral>
            <div className="sobreobj">
                <div>
                    <h3>Sobre mim</h3>
                    <p>Olá denovo, me chamo Jhonatan e sou um Jovem desenvolvedor de 19 anos, comecei na área no ultimo ano e me apaixonei por ela, vim aprendendo varias tecnologias ao longo da minha jornada, que no caso são: React, React Native, Next, PHP, SQL, My Sql, e claro HTML e CSS, fora conhecimentos em UX e UI. Sou curioso, gosto de aprender coisas novas e gosto de trabalho em equipe. </p>
                </div>

                <div>
                    <h3>Objetivo</h3>

                    <p>Tenho como Objetivo</p>
                </div>
            </div>

            <div>
                <h3>Tecnologias</h3>

                <div className="tec">
                    <div>
                        <h4>Front-End</h4>
                        <p>React, NextJS, JavaScript(ES6), HTML, CSS, TailWind CSS, Bootstrap</p>
                    </div>

                    <div>
                        <h4>Mobile</h4>
                        <p>React Native</p>
                    </div>

                    <div>
                        <h4>Back-End</h4>
                        <p>PHP, Nodejs, API's</p>
                    </div>

                    <div>
                        <h4>Banco</h4>
                        <p>SQL, mySQL, firebase, PHPmyAdmin</p>
                    </div>
                </div>
            </div>
        </StyledGeral>
        <StyledSites>
            <h3>Sites</h3>

            <div className="site">
                <Image
                src="/image/lamborghini-desktop.png"
                width={550}
                height={350}
                />
                <p>Esse foi um projeto onde eu recriei o site da lamborghini usando algumas coisas que aprendi na minha jornada com next, e foi algo que eu fiquei apaixonado.</p>
            </div>
        </StyledSites>
        </>
      );
    }

const StyledApresentacao = styled.section`
    background: linear-gradient(to right, #7F0AEF, #EEF531);
    font-family: var(--fonte-titulo);
    color: #F5F5F5;
    height: 750px;
    width: 100%;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 85px;
    };

    h2 {
        font-size: 65px
    };

    p {
        font-size: 40px;
    };
`;

const StyledGeral = styled.section`
    padding: 30px;
    font-family: var(--fonte-texto);
    display: flex;
    gap: 50px;


    .sobreobj {
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 80%;
    }

    .tec {
        display: grid;
        grid-template-columns: repeat(2, 200px);
        grid-gap: 20px;
    }

    h3 {
        font-size: 40px
    };

    h4 {
        font-size: 26px;
    };

    p {
        font-size: 20px;
    };
`;
const StyledSites = styled.section`
    padding: 30px;
    font-family: var(--fonte-texto);
    display: flex;
    gap: 50px;

    .site {
        background-color: lightgray;
        width: 35%;
        font-size: 25px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    img {
        padding: 10px;
    }

    h3 {
        font-size: 40px
    };
`;
