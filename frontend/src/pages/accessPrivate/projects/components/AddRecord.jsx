export const AddRecord = ({ addProject }) => {
  return (
    <div className="addRecord">
        <div className="addRecord__container" onClick={addProject}>
            <span>+</span>
        </div>
    </div>
  )
}
