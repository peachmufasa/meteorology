const UserItem = ({ fullName, position, role, onEditUser, onDeleteUser }) => {
  return (
    <div className="px-16 py-3 mb-4 flex justify-between items-center  border-t-[1px] border-gray/30">
      <div className="flex flex-col gap-2">
        <p className="text-xl font-medium tracking-wide">{fullName}</p>
        <span className=" text-gray text-lg font-normal">{position}</span>
        <span className="text-gray text-lg font-normal">{role}</span>
      </div>
      <div className="flex flex-col gap-3">
        <button
          onClick={onEditUser}
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
