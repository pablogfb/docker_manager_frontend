import Button from "./Button";


export default function Sidebar({ handleActionChange }) {



    return <aside className="w-200 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Docker Manager</h2>
        <div>
            <ul>
                <li className="mb-8"><button onClick={() => handleActionChange('images')}> Images </button></li>
                <li className="mb-8"><button onClick={() => handleActionChange('containers')}> Containers </button></li>
            </ul>
            <Button onClick={() => handleActionChange('new_image')}> Create new image </Button>

        </div>

    </aside>
}