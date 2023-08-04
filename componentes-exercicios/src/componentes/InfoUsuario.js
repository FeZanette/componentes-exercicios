export default function InfoUsuario () {
   
    const usuario = "Fernanda"
    
    return (
        <div className="container-usuario">
            <img src="https://picsum.photos/50" alt="imagem" />
            <p>
                Nomo do usuário: {usuario}
            </p>
        </div>
    )
}