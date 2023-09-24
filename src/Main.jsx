import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Main() {

  const handleClick = (e) => {
    alert('Pulsado botón con id=' + e.target.id);
    console.log(e);
  }

  return (
    <div className="p-4">
      <Typography variant="h3" color="green" textGradient >App react</Typography>
      <div className="grid md:grid-cols-2 mt-4 gap-4 px-3">
        <Card>
          <CardBody>
            <Typography variant="h5">Título 1</Typography>
            <Typography>
              Contenido del tablero 1.
            </Typography>
          </CardBody>
          <CardFooter>
            <Button type="button" id="b1" onClick={handleClick}>Ir</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardBody>
            <Typography variant="h5">Título 2</Typography>
            <Typography>
              Contenido del tablero 2.
            </Typography>
          </CardBody>
          <CardFooter>
            <Button type="button" id="b2" onClick={handleClick}>Ir 2</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
    
  )
}