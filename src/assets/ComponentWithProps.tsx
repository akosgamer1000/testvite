interface props{
    személynév:string,
    telefon:string,
    email:string
}

export function ComponentWithProps(props:props){
    return<>
        <div className="card">
            <div className="card-body">
                <div className="card-text">személynév:{props.személynév}</div>
                <div className="card-text">telefon:{props.telefon}</div>
                <div className="card-text">email:{props.email}</div>
            </div>
        </div>
    
    </>
}