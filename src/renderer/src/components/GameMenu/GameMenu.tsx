import './GameMenu.scss'

function GameMenu(): JSX.Element {
  const exit = (): void => window.electron.ipcRenderer.send('exit')
  return (
    <>
      <div className="game-menu active">
        <div className="game-menu__title">Noname Clicker</div>
        <div className="game-menu__item">New Game</div>
        <div className="game-menu__item">Load Game</div>
        <div className="game-menu__item">Settings</div>
        <div className="game-menu__item" onClick={exit}>
          Exit
        </div>
      </div>
    </>
  )
}

export default GameMenu
