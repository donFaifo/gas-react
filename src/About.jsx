import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function About() {
  return(
    <div className="m-4">
      <Typography variant="h3" color="green" textGradient >Acerca de...</Typography>
      <div className="p-3 mt-4">
        <Card>
          <CardBody>
            <Typography variant="h5" className="underline">Datos desarrollador</Typography>
            <ul>
              <li className="md:flex mt-3">
                <Typography className="mr-3 font-bold">Nombre:</Typography>
                <Typography>Nombre del desarrollador</Typography>
              </li>
              <li className="md:flex mt-2">
                <Typography className="mr-3 font-bold">email:</Typography>
                <Typography>mail de contacto del desarrollador</Typography>
              </li>
              <li className="md:flex mt-2">
                <Typography className="mr-3 font-bold">Equipo de trabajo:</Typography>
                <Typography>Equipo de trabajo del desarrollador</Typography>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}