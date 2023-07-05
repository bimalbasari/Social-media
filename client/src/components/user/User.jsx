
const time = new Date().toJSON();
const User = ({ user }) => {
    if (user) {
        return (

            <div className="bg-white  drop-shadow-lg flex  items-center rounded-sm">
                <div className="h-16 w-16 flex items-center justify-center">
                    <img src={user.picture} alt="" className="h-12  w-auto rounded-full" />
                </div>
                <div className="flex items-center justify-between flex-1 ">
                    <div className=" antialiased ">
                        <h2 className="text-base font-bold leading-5 text-slate-700 capitalize pb-1">{`${user.firstName} ${user.lastName}`}</h2>
                        <p className="text-xs  leading-3 text-slate-500">{time}</p>
                    </div>

                </div>

            </div>

        )
    }
}

export default User
