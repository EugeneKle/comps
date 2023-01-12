import { GoBell, GoCloudUpload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div>
        <Button secondary outline rounded>
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline rounded>
          <GoCloudUpload />
          Buy noew!
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <GoDatabase />
          Subscrube
        </Button>
      </div>
      <div>
        <Button primary outline>
          <GoBell />
          Follow me
        </Button>
      </div>
      <div>
        <Button success rounded>
          Success button
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
