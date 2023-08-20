import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { login } from "../../features/slices/authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import React from 'react'

const Login = () => {

    const initialState = {
        name: '',
        password: '',
        image: '',
    }

    const [values, setValues] = useState(initialState)

    const onChange = (event) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value })
    }

    const dispatch = useDispatch()

    const nameError = useSelector((state) => state.user.error.name)
    const passwordError = useSelector((state) => state.user.error.password)

    return (
        <div className="grid grid-cols-1 items-center justify-items-center h-screen">
            <Card className="w-96">
                <CardHeader
                    variant="gradient"
                    className="mb-4 grid h-28 place-items-center bg-black"
                >

                    <Typography variant="h3" color="white">
                        Sign In
                    </Typography>

                </CardHeader>

                <CardBody className="flex flex-col gap-4">
                    <Input label="Username" size="lg" type="text" name="name" value={values.name} onChange={onChange} />
                    {nameError &&
                        <Typography variant="paragraph" color="red" className="mt-2 text-center">
                            {nameError}
                        </Typography>
                        }
                    <Input label="Password" size="lg" type="password" name="password" value={values.password} onChange={onChange} />
                    {passwordError &&
                        <Typography variant="paragraph" color="red" className="mt-2 text-center">
                            {passwordError}
                        </Typography>
                        }
                    <Input label="Image URL Address" size="lg" type="text" name="image" value={values.image} onChange={onChange} />
                </CardBody>

                <CardFooter className="pt-0">
                    <Button className="bg-black font-raleway" fullWidth onClick={() => dispatch(login(values))}>
                        Sign In
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Image is Optional
                    </Typography>
                </CardFooter>

            </Card>
        </div>
    )
}

export default Login
