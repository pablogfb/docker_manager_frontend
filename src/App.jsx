import { useState } from "react";
import NoImageSelected from "./components/NoImageSelected";
import Sidebar from "./components/Sidebar";
import AvailableImages from "./components/AvailableImages";
import AvailableContainers from "./components/AvailableContainers";
import SelectedDetails from "./components/SelectedDetails";
import { fetchImageinfo, fetchContainerinfo } from "./http";
import NewImage from "./components/NewImage";

function App() {

  const [action, setAction] = useState(
    {
      selectedAction: null,
      id: ''
    }
  );

  function actionChange(newAction, id = '') {
    setAction({selectedAction: newAction, id: id});
  }

  let content = '';
  if (action.selectedAction === null) {
    content = <NoImageSelected handleActionChange={actionChange}/>
  } else if (action.selectedAction === 'images') {
    content = <AvailableImages handleActionChange={actionChange}/>
  } else if (action.selectedAction === 'new_image') {
    content = <NewImage />
  } else if (action.selectedAction === 'containers') {
    content = <AvailableContainers handleActionChange={actionChange}/>
  } else if (action.selectedAction === 'image') {
    content = <SelectedDetails fetchFunction={fetchImageinfo} id={action.id}/>
  } else if (action.selectedAction === 'container') {
    content = <SelectedDetails fetchFunction={fetchContainerinfo} id={action.id}/>
  } else {
    content = ''
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar handleActionChange={actionChange} />
      <div className="flex-col">
        {content}
      </div>
    </main>
  );
}

export default App;
