import { useRef } from "react";
import { newDockerfile, newImage } from "../http";
import Input from "./Input";


export default function NewImage() {

    const raw_text = useRef();
    const dockerfile = useRef();

    const handleSave = (action) => {
        if (action === 'raw_text') {
            newImage(raw_text.current.value);
        } else if (action === 'dockerfile') {
            const file = dockerfile.current.files[0];
            if (file) {
                newDockerfile(file);
            }
        }
    }

    return (
        <>
            <div className="w-[35rem] mt-16">
                <div>
                    <div className="mt-3 border-b-2 pb-3">

                        <Input label='Raw text' textArea rows={10} id="raw-text" ref={raw_text} />
                        <button
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={() => { handleSave('raw_text') }}>
                            Save
                        </button>
                    </div>
                    <div className="mt-3">
                        <Input label='Upload Dockerfile' type="file" id="dockerfile" ref={dockerfile} />
                        <button
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={() => { handleSave('dockerfile') }}>
                            Upload
                        </button>
                    </div>
                </div>
            </div >
        </>
    )
}