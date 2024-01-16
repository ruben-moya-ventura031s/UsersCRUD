
const UserCard = ({ user, deleteUser, setUserUpdate, setIsFormClose }) => {

    const handleDelete = () => {
        deleteUser(user.id)
    }

    const handleEdit = () => {
        setUserUpdate(user)
        setIsFormClose(false)
    }

  return (
    <article>
      <h2>{user.first_name} {user.last_name}</h2>
      <hr />
      <ul>
        <li><span>Email</span><span>{user.email}</span></li>
        <li><span>Birthday</span><span>{user.birthday}</span></li>
      </ul>
      <hr />
      <footer>
        <button><i onClick={handleDelete} className='bx bx-trash'></i></button>
        <button><i onClick={handleEdit} className='bx bx-edit-alt' ></i></button>
      </footer>
    </article>
  )
}

export default UserCard