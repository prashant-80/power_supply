"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  handleSet  from '../api/esp';

export default function SetForm() {
  const [voltage, setVoltage] = useState('');
  const [current, setCurrent] = useState('');


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "voltage") {
      setVoltage(value);
    } else if (name === "current") {
      setCurrent(value);
    }
  };

  const check = () => {
    if (voltage === "" || current === "") {
      toast.error("Please enter both voltage and current values.");
      return;
    }

    const voltageNum = parseFloat(voltage);
    const currentNum = parseFloat(current);

    if (voltageNum > 24 || currentNum > 2) {
      toast.error(
        "Values exceed the maximum limits. Voltage max is 24V, Current max is 2A."
      );
      return;
    }

    
    //call the API to set the voltage and current
    console.log(`Setting voltage to ${voltage}V and current to ${current}A from client`);
    toast.success(`Set: Voltage ${voltage}V, Current ${current}A from client`);
    handleSet(voltageNum, currentNum);
  };

  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Set Power Supply</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="voltage">Voltage (V) - Max 24V</Label>
              <Input
                id="voltage"
                name="voltage" 
                placeholder="Enter voltage (0.0 - 24.0)"
                value={voltage}
                onChange={handleInputChange} 
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="current">Current (A) - Max 2A</Label>
              <Input
                id="current"
                name="current"
                placeholder="Enter current (0.0 - 2.0)"
                value={current}
                onChange={handleInputChange} 
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
          <Button onClick={check}>Set</Button>
        </CardFooter>
      </Card>
      <ToastContainer position="bottom-center" />
    </>
  );
}
