
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AddConfig = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  
  // Sensitivity Analysis Report Configuration state
  const [discountRate1, setDiscountRate1] = useState("1");
  const [discountRate2, setDiscountRate2] = useState("1");
  const [withdrawalRates1, setWithdrawalRates1] = useState("10");
  const [mortalitySetBack, setMortalitySetBack] = useState("10");
  const [mortalitySetForward, setMortalitySetForward] = useState("10");

  const companies = [
    "test company",
    "qenawy company",
    "adnh",
  ];

  const countries = [
    "Saudi Arabia",
    "United Arab Emirates",
    "Kuwait",
    "Qatar",
    "Bahrain",
    "Oman",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Config created:", { title, company, country });
  };

  const handleCreateAndAddAnother = () => {
    console.log("Create and add another config");
    // Reset form
    setTitle("");
    setCompany("");
    setCountry("");
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold">Create Config</CardTitle>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={handleCreateAndAddAnother}
            >
              Create and add another
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={handleSubmit}
            >
              Create
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Field */}
            <div className="space-y-2">
              <Label htmlFor="title">
                Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter config title"
                required
              />
            </div>

            {/* Company Dropdown */}
            <div className="space-y-2">
              <Label htmlFor="company">
                Company <span className="text-red-500">*</span>
              </Label>
              <Select value={company} onValueChange={setCompany}>
                <SelectTrigger>
                  <SelectValue placeholder="test company" />
                </SelectTrigger>
                <SelectContent>
                  {companies.map((comp) => (
                    <SelectItem key={comp} value={comp}>
                      {comp}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Config Country Dropdown */}
            <div className="space-y-2">
              <Label htmlFor="country">
                Config Country <span className="text-red-500">*</span>
              </Label>
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((countryOption) => (
                    <SelectItem key={countryOption} value={countryOption}>
                      {countryOption}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sensitivity Analysis Report Configuration */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Sensitivity Report Configuration <span className="text-gray-400">(Optional)</span>
              </h3>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="sensitivity-config" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="text-base font-medium">Sensitivity Report Configuration</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-6">
                      {/* Header Row */}
                      <div className="grid grid-cols-3 gap-4 pb-2 border-b">
                        <div className="font-medium text-gray-600">Sign</div>
                        <div className="font-medium text-gray-600">Percentage</div>
                        <div className="font-medium text-gray-600">Particulars</div>
                      </div>

                      {/* Discount Rate Row 1 */}
                      <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="text-gray-600">(+/-)</div>
                        <div>
                          <Input
                            type="number"
                            value={discountRate1}
                            onChange={(e) => setDiscountRate1(e.target.value)}
                            className="w-full"
                          />
                        </div>
                        <div className="text-gray-600">Discount Rate</div>
                      </div>

                      {/* Salary Increase Rate Row */}
                      <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="text-gray-600">(+/-)</div>
                        <div>
                          <Input
                            type="number"
                            value={discountRate2}
                            onChange={(e) => setDiscountRate2(e.target.value)}
                            className="w-full"
                          />
                        </div>
                        <div className="text-gray-600">Salary Increase Rate</div>
                      </div>

                      {/* Withdrawal Rates Row */}
                      <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="text-gray-600">(+/-)</div>
                        <div>
                          <Input
                            type="number"
                            value={withdrawalRates1}
                            onChange={(e) => setWithdrawalRates1(e.target.value)}
                            className="w-full"
                          />
                        </div>
                        <div className="text-gray-600">Withdrawal Rates</div>
                      </div>

                      {/* Mortality Rates set back Row */}
                      <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="text-gray-600">(+)</div>
                        <div>
                          <Input
                            type="number"
                            value={mortalitySetBack}
                            onChange={(e) => setMortalitySetBack(e.target.value)}
                            className="w-full"
                          />
                        </div>
                        <div className="text-gray-600">Mortality Rates set back</div>
                      </div>

                      {/* Mortality Rates set forward Row */}
                      <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="text-gray-600">(-)</div>
                        <div>
                          <Input
                            type="number"
                            value={mortalitySetForward}
                            onChange={(e) => setMortalitySetForward(e.target.value)}
                            className="w-full"
                          />
                        </div>
                        <div className="text-gray-600">Mortality Rates set forward</div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddConfig;
