export function nav1(){
    return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand ms-3" href="#">Sistema de Agendamentos</a>
        <button 
            class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse ms-3" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#" id="linkDashboard">Dashboard</a></li>
            <li class="nav-item"><a class="nav-link" href="#" id="linkAgendamentos">Agendamentos</a></li>
            <li class="nav-item"><a class="nav-link" href="#" id="linkUsuarios">Usuários</a></li>
            </ul>
        </div>
    </nav>
    `;
}

export const nav2 = ()=>{
    return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <a class="navbar-brand" href="#"><i class="bi bi-house-door-fill"></i> MySite</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" href="#"><i class="bi bi-house"></i> Início</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-info-circle"></i> Sobre</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-gear"></i> Configurações</a>
            </li>
            </ul>

            <!-- Botão de perfil à direita -->
            <div class="d-flex">
            <div class="dropdown">
                <button class="btn btn-outline-secondary dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown">
                <i class="bi bi-person-circle me-2"></i> Perfil
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#">Meu Perfil</a></li>
                <li><a class="dropdown-item" href="#">Configurações</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Sair</a></li>
                </ul>
            </div>
            </div>
        </div>
    </nav>
    `;
}