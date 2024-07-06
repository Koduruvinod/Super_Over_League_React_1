const element = (
  <div clasName='bg-container'>
    <h1 id='heading'>Super Over League</h1>
    <div clasName='image-container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
        className='image'
      />
      <img
        src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
        className='image'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
