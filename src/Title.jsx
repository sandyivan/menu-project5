const Title = ({ text }) => {
  return (
    <div className='title'>
      <h2>{text || 'default text'}</h2>
      <div className='title-underline'></div>
    </div>
  )
}
export default Title
