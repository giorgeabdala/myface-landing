

export default function Card () {
    return (

            <div className="p-6 rounded-lg  md:p-8 bg-zinc-800">
                <p className="leading-loose text-gray-300">
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                    tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                    aperiam dolorum, obcaecati corrupti aspernatur a.”.
                </p>

                <div className="flex items-center mt-6">
                    <img className="object-cover rounded-full w-14 h-14"
                         src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                         alt="" />

                        <div className="mx-4">
                            <h1 className="font-semibold text-rose-gold">Robbert</h1>
                            <span className="text-sm text-gray-300">CTO, Robert Consultency</span>
                        </div>
                </div>
            </div>


        )


}