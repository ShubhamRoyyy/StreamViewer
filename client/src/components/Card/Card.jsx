import "./Card.css";

function Card({

    title,
    subtitle,
    value,
    variant,
    color

}){

    return(

        <div className={`card ${color}`}>

            <div className="card-title">

                {title}

            </div>

            {

                variant==="status"

                ?

                <div className="live">

                    {subtitle}

                </div>

                :

                <>

                    <div className="number">

                        {value}

                    </div>

                    <div className="subtitle">

                        {subtitle}

                    </div>

                </>

            }

        </div>

    );

}

export default Card;