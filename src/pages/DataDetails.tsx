
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DataDetails = () => {
  const navigate = useNavigate();

  const handleBackToRuntime = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-slate-800">Data Details</h1>
          <Button
            variant="outline"
            onClick={handleBackToRuntime}
            className="bg-white hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Runtime
          </Button>
        </div>

        <Tabs defaultValue="current" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-white border">
            <TabsTrigger value="current" className="flex items-center gap-2">
              Current Details
            </TabsTrigger>
            <TabsTrigger value="last" className="flex items-center gap-2">
              Last Details
            </TabsTrigger>
          </TabsList>

          <TabsContent value="current">
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">
                  Current Period Details
                </CardTitle>
                <CardDescription>
                  Employee data and calculations for the current period
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left p-2 font-medium text-slate-700">
                          Employee code
                        </th>
                        <th className="text-left p-2 font-medium text-slate-700">
                          Employee name
                        </th>
                        <th className="text-left p-2 font-medium text-slate-700">
                          Date of birth
                        </th>
                        <th className="text-left p-2 font-medium text-slate-700">
                          Date of joining
                        </th>
                        <th className="text-left p-2 font-medium text-slate-700">
                          Basic salary
                        </th>
                        <th className="text-left p-2 font-medium text-slate-700">
                          Transportation
                        </th>
                        <th className="text-left p-2 font-medium text-slate-700">
                          Housing
                        </th>
                        <th className="text-left p-2 font-medium text-slate-700">
                          Current Age
                        </th>
                        <th className="text-left p-2 font-medium text-slate-700">
                          Service Cost
                        </th>
                        <th className="text-left p-2 font-medium text-slate-700">
                          PVDBO
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-2">1001</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            Null
                          </span>
                        </td>
                        <td className="p-2">1961-10-19</td>
                        <td className="p-2">2021-11-14</td>
                        <td className="p-2">48150</td>
                        <td className="p-2">1000</td>
                        <td className="p-2">4000</td>
                        <td className="p-2">64</td>
                        <td className="p-2">27,139,358</td>
                        <td className="p-2">95,478,977</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-2">1002</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            Null
                          </span>
                        </td>
                        <td className="p-2">1999-07-29</td>
                        <td className="p-2">2022-03-21</td>
                        <td className="p-2">5000</td>
                        <td className="p-2">500</td>
                        <td className="p-2">2000</td>
                        <td className="p-2">26</td>
                        <td className="p-2">5,039,388</td>
                        <td className="p-2">15,976,675</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-2">1003</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            Null
                          </span>
                        </td>
                        <td className="p-2">1960-06-21</td>
                        <td className="p-2">2020-02-28</td>
                        <td className="p-2">29425</td>
                        <td className="p-2">500</td>
                        <td className="p-2">2000</td>
                        <td className="p-2">45</td>
                        <td className="p-2">27,821,641</td>
                        <td className="p-2">145,487,711</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-2">1004</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            Null
                          </span>
                        </td>
                        <td className="p-2">1967-08-26</td>
                        <td className="p-2">2020-07-13</td>
                        <td className="p-2">10800</td>
                        <td className="p-2">700</td>
                        <td className="p-2">2000</td>
                        <td className="p-2">38</td>
                        <td className="p-2">12,154,362</td>
                        <td className="p-2">59,032,521</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-2">1005</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            Null
                          </span>
                        </td>
                        <td className="p-2">1993-06-22</td>
                        <td className="p-2">2021-04-19</td>
                        <td className="p-2">8500</td>
                        <td className="p-2">500</td>
                        <td className="p-2">1000</td>
                        <td className="p-2">32</td>
                        <td className="p-2">8,942,461</td>
                        <td className="p-2">36,577,342</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-2">1006</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            Null
                          </span>
                        </td>
                        <td className="p-2">1993-05-15</td>
                        <td className="p-2">2021-03-15</td>
                        <td className="p-2">6800</td>
                        <td className="p-2">500</td>
                        <td className="p-2">1200</td>
                        <td className="p-2">32</td>
                        <td className="p-2">7,621,242</td>
                        <td className="p-2">31,904,045</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-2">1007</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            Null
                          </span>
                        </td>
                        <td className="p-2">1968-06-14</td>
                        <td className="p-2">2021-11-08</td>
                        <td className="p-2">5500</td>
                        <td className="p-2">500</td>
                        <td className="p-2">800</td>
                        <td className="p-2">37</td>
                        <td className="p-2">6,156,585</td>
                        <td className="p-2">21,761,065</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-2">1008</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            Null
                          </span>
                        </td>
                        <td className="p-2">1976-01-03</td>
                        <td className="p-2">2021-11-08</td>
                        <td className="p-2">5500</td>
                        <td className="p-2">500</td>
                        <td className="p-2">800</td>
                        <td className="p-2">49</td>
                        <td className="p-2">5,597,772</td>
                        <td className="p-2">19,785,886</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-2">1009</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            Null
                          </span>
                        </td>
                        <td className="p-2">1994-03-26</td>
                        <td className="p-2">2021-12-02</td>
                        <td className="p-2">5900</td>
                        <td className="p-2">500</td>
                        <td className="p-2">1000</td>
                        <td className="p-2">31</td>
                        <td className="p-2">5,990,057</td>
                        <td className="p-2">20,778,907</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-2">1010</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            Null
                          </span>
                        </td>
                        <td className="p-2">1969-06-03</td>
                        <td className="p-2">2022-02-03</td>
                        <td className="p-2">5300</td>
                        <td className="p-2">0</td>
                        <td className="p-2">0</td>
                        <td className="p-2">36</td>
                        <td className="p-2">4,768,889</td>
                        <td className="p-2">15,720,166</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <p className="text-sm text-slate-600">
                    Showing 10 of 20,001 employees
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="last">
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">
                  Last Period Details
                </CardTitle>
                <CardDescription>
                  Employee data and calculations for the previous period
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left p-2 font-medium text-slate-700">
                          Employee code
                        </th>
                        <th className="text-left p-2 font-medium text-slate-700">
                          Employee name
                        </th>
                        <th className="text-left p-2 font-medium text-slate-700">
                          Date of birth
                        </th>
                        <th className="text-left p-2 font-medium text-slate-700">
                          Date of joining
                        </th>
                        <th className="text-left p-2 font-medium text-slate-700">
                          Basic salary
                        </th>
                        <th className="text-left p-2 font-medium text-slate-700">
                          Transportation
                        </th>
                        <th className="text-left p-2 font-medium text-slate-700">
                          Housing
                        </th>
                        <th className="text-left p-2 font-medium text-slate-700">
                          Current Age
                        </th>
                        <th className="text-left p-2 font-medium text-slate-700">
                          Service Cost
                        </th>
                        <th className="text-left p-2 font-medium text-slate-700">
                          PVDBO
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-2">1001</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            Null
                          </span>
                        </td>
                        <td className="p-2">1961-10-19</td>
                        <td className="p-2">2021-11-14</td>
                        <td className="p-2">45800</td>
                        <td className="p-2">950</td>
                        <td className="p-2">3800</td>
                        <td className="p-2">63</td>
                        <td className="p-2">24,892,134</td>
                        <td className="p-2">89,234,567</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-2">1002</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            Null
                          </span>
                        </td>
                        <td className="p-2">1999-07-29</td>
                        <td className="p-2">2022-03-21</td>
                        <td className="p-2">4750</td>
                        <td className="p-2">475</td>
                        <td className="p-2">1900</td>
                        <td className="p-2">25</td>
                        <td className="p-2">4,789,123</td>
                        <td className="p-2">14,567,890</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-2">1003</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            Null
                          </span>
                        </td>
                        <td className="p-2">1960-06-21</td>
                        <td className="p-2">2020-02-28</td>
                        <td className="p-2">28200</td>
                        <td className="p-2">475</td>
                        <td className="p-2">1900</td>
                        <td className="p-2">44</td>
                        <td className="p-2">25,634,789</td>
                        <td className="p-2">132,456,789</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-2">1004</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            Null
                          </span>
                        </td>
                        <td className="p-2">1967-08-26</td>
                        <td className="p-2">2020-07-13</td>
                        <td className="p-2">10300</td>
                        <td className="p-2">665</td>
                        <td className="p-2">1900</td>
                        <td className="p-2">37</td>
                        <td className="p-2">11,234,567</td>
                        <td className="p-2">54,321,987</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-2">1005</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            Null
                          </span>
                        </td>
                        <td className="p-2">1993-06-22</td>
                        <td className="p-2">2021-04-19</td>
                        <td className="p-2">8100</td>
                        <td className="p-2">475</td>
                        <td className="p-2">950</td>
                        <td className="p-2">31</td>
                        <td className="p-2">8,234,567</td>
                        <td className="p-2">33,456,789</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-2">1006</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            Null
                          </span>
                        </td>
                        <td className="p-2">1993-05-15</td>
                        <td className="p-2">2021-03-15</td>
                        <td className="p-2">6500</td>
                        <td className="p-2">475</td>
                        <td className="p-2">1140</td>
                        <td className="p-2">31</td>
                        <td className="p-2">7,123,456</td>
                        <td className="p-2">28,234,567</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-2">1007</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            Null
                          </span>
                        </td>
                        <td className="p-2">1968-06-14</td>
                        <td className="p-2">2021-11-08</td>
                        <td className="p-2">5250</td>
                        <td className="p-2">475</td>
                        <td className="p-2">760</td>
                        <td className="p-2">36</td>
                        <td className="p-2">5,789,123</td>
                        <td className="p-2">19,876,543</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-2">1008</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            Null
                          </span>
                        </td>
                        <td className="p-2">1976-01-03</td>
                        <td className="p-2">2021-11-08</td>
                        <td className="p-2">5250</td>
                        <td className="p-2">475</td>
                        <td className="p-2">760</td>
                        <td className="p-2">48</td>
                        <td className="p-2">5,234,567</td>
                        <td className="p-2">17,654,321</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-2">1009</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            Null
                          </span>
                        </td>
                        <td className="p-2">1994-03-26</td>
                        <td className="p-2">2021-12-02</td>
                        <td className="p-2">5600</td>
                        <td className="p-2">475</td>
                        <td className="p-2">950</td>
                        <td className="p-2">30</td>
                        <td className="p-2">5,567,890</td>
                        <td className="p-2">18,234,567</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-2">1010</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            Null
                          </span>
                        </td>
                        <td className="p-2">1969-06-03</td>
                        <td className="p-2">2022-02-03</td>
                        <td className="p-2">5000</td>
                        <td className="p-2">0</td>
                        <td className="p-2">0</td>
                        <td className="p-2">35</td>
                        <td className="p-2">4,345,678</td>
                        <td className="p-2">13,567,890</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <p className="text-sm text-slate-600">
                    Showing 10 of 20,501 employees
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DataDetails;
