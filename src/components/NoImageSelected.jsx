import Button from "./Button";

import noProjectImage from "../assets/no-projects.png"


export default function NoImageSelected({handleActionChange}) {
    return (
        <div className="mt-24 text-center">
            <img className="w-16 h-16 object-contain mx-auto" src={noProjectImage} alt="An empty task list"/>
            <h2 className="text-xl font-bold text-stone-500 my-4">No Image selected</h2>
            <p className="text-stone-400 mb-4">Select an Image or create one</p>
            <p className="mt-8">
            <Button onClick={() => handleActionChange('new_image')}> Create new image </Button>
            </p>
        </div>
    )
}