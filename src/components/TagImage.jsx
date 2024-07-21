import { useRef } from "react";
import { tagImage } from "../http";
import Input from "./Input";


export default function TagImage({id}) {

    const tag = useRef();
    const repo = useRef();
    const handleSave = () => {
        tagImage(id, repo.current.value, tag.current.value)
    }

    return (
        <>
            <div className="w-[35rem] mt-16">
                <div>
                    <div className="mt-3 pb-3 flex-row">
                        <Input label='Repo'  id="repo" ref={repo} />
                        <Input label='Tag'  id="tag" ref={tag} />
                        <button
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={() => { handleSave() }}>
                            Save
                        </button>
                    </div>

                </div>
            </div >
        </>
    )
}