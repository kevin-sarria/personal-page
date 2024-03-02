export const Loader = ({ notification = 'Loading...' }) => {
  return (
    <div className="overlay--loader">
        <div className="loader__container">
            <span className="loader"></span>
            <p className="text--loader">{ notification }</p>
        </div>
    </div>
  )
}
