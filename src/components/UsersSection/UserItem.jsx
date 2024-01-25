const UserItem = ({ user, onEditUser, onDeleteUser }) => {
    const userFullName = user.last_name + " " + user.first_name + " " + user.middle_name
  return (
    <div className="px-16 py-4 flex justify-between items-center  border-t-[1px] border-gray/30">
      <div className="flex flex-col gap-2">
        <p className="text-xl font-medium tracking-wide">{userFullName}</p>
        <span className=" text-gray text-lg font-normal">{user.post_code}</span>
        <span className="text-gray text-lg font-normal">{user.role}</span>
      </div>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => onEditUser(user)}
          className="text-gray text-xl font-normal transition-all ease-in-out hover:text-perfect-blue"
        >
          Редактировать
        </button>
        <button
          onClick={onDeleteUser}
          className="text-gray text-xl font-normal transition-all ease-in-out hover:text-red"
        >
          Удалить
        </button>
      </div>
    </div>
  );
};
export default UserItem;
