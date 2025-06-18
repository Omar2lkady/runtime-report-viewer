
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";

const AddConfig = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      title: "",
      company: "",
      configCountry: "",
      discountRate: "",
      salaryIncreaseRate: "",
      withdrawalRates: "",
      mortalityAgeSetback: "",
      mortalityAgeSetforward: "",
    },
  });

  const handleCreateConfig = () => {
    console.log("Creating config...", form.getValues());
    // Handle config creation logic here
    navigate("/config");
  };

  const handleCreateAndAddAnother = () => {
    console.log("Creating config and adding another...", form.getValues());
    // Handle config creation logic here
    form.reset();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Create Config</h1>
        <div className="flex gap-3">
          <Button 
            variant="outline"
            onClick={handleCreateAndAddAnother}
          >
            Create and add another
          </Button>
          <Button 
            onClick={handleCreateConfig}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Create
          </Button>
        </div>
      </div>

      <Form {...form}>
        <form className="space-y-6">
          {/* Basic Config Fields */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Title <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter config title" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Company <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="test-company">test company</SelectItem>
                        <SelectItem value="qenawy-company">qenawy company</SelectItem>
                        <SelectItem value="adnh">adnh</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="configCountry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Config Country <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="pakistani">Pakistani</SelectItem>
                        <SelectItem value="saudi">Saudi</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Sensitivity Analysis Report Configuration */}
          <Card>
            <CardHeader>
              <CardTitle>Sensitivity Analysis Report Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="discountRate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Discount Rate (%)</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" step="0.01" placeholder="e.g., 5.5" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="salaryIncreaseRate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Salary Increase Rate (%)</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" step="0.01" placeholder="e.g., 3.0" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="withdrawalRates"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Withdrawal Rates (%)</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" step="0.01" placeholder="e.g., 10.0" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mortalityAgeSetback"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mortality Age Set Back (Years)</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" placeholder="e.g., 1" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mortalityAgeSetforward"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mortality Age Set Forward (Years)</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" placeholder="e.g., 1" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Configuration Notes:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Discount Rate: Used for present value calculations</li>
                  <li>• Salary Increase Rate: Annual salary growth assumption</li>
                  <li>• Withdrawal Rates: Employee turnover assumptions</li>
                  <li>• Mortality adjustments affect life expectancy calculations</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default AddConfig;
