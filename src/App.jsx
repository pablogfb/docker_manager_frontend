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
  switch (action.selectedAction) {
    case null:
      content = <NoImageSelected handleActionChange={actionChange} />;
      break;
    case 'images':
      content = <AvailableImages handleActionChange={actionChange} />;
      break;
    case 'new_image':
      content = <NewImage />;
      break;
    case 'containers':
      content = <AvailableContainers handleActionChange={actionChange} />;
      break;
    case 'image':
      content = <SelectedDetails fetchFunction={fetchImageinfo} id={action.id} />;
      break;
    case 'container':
      content = <SelectedDetails fetchFunction={fetchContainerinfo} id={action.id} container={true} />;
      break;
    default:
      content = '';
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar handleActionChange={actionChange} />
      <div className="flex-col grow">
        {content}
      </div>
    </main>
  );
}

export default App;
