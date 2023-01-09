import { GoBell, GoCloudUpload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button secondary outline rounded className={"mb-5"}>
          <GoBell />
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
