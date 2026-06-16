import CardFase from '../../components/cards/cardFase'
import Header from '../../components/header/header'

function Fases(){

    const fases = [
        {id:1, desbloqueada:true},
        {id:2, desbloqueada:false},
        {id:3, desbloqueada:false},
        {id:4, desbloqueada:false},
        {id:5, desbloqueada:false},
        {id:6, desbloqueada:false},
    ]

    return(
        <>
            <Header />

            <div className="mapa">

                {fases.map((fase,index)=>(
                    <div
                        key={fase.id}
                        className={index % 2 === 0 ? 'direita' : 'esquerda'}
                    >
                        <CardFase
                            fase={fase.id}
                            desbloqueada={fase.desbloqueada}
                        />
                    </div>
                ))}

            </div>
        </>
    )
}

export default Fases