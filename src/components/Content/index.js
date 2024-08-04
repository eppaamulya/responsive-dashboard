import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, LineChart, Line, Legend,} from 'recharts';
import './index.css';

import { IoIosStats } from "react-icons/io";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import AppContext from '../../context/AppContext';
import { FcMoneyTransfer } from "react-icons/fc";
import { RxDragHandleDots2 } from "react-icons/rx";
import { HiDotsHorizontal } from 'react-icons/hi';

const Content = () => {
  const [monthlyExpenses, setMonthlyExpenses] = useState([]);
  const [expenseCategories, setExpenseCategories] = useState([]);
  const [investmentPerformance, setInvestmentPerformance] = useState([]);
  const [yearlyIncome, setYearlyIncome] = useState([]);
  const [savingsTrends, setSavingsTrends] = useState([]);


  useEffect(() => {
    axios.get('https://mocki.io/v1/f1ef0b6a-39de-4342-994b-e619f6492b7d').then(response => {
      setMonthlyExpenses(response.data.monthlyExpenses);
    });

    axios.get('https://mocki.io/v1/b35e01bb-501b-4655-804e-4a3a9b172473').then(response => {
      setExpenseCategories(response.data.categories);
    });

    axios.get('https://mocki.io/v1/8452c467-f55e-4da0-a1dc-e925a86173f2').then(response => {
      setInvestmentPerformance(response.data.performance);
    });

    axios.get('https://mocki.io/v1/1dce9be9-1bc5-4095-a6ea-b025f9d3db9c').then(response => {
      setYearlyIncome(response.data.yearlyIncome);
    });

    axios.get('https://mocki.io/v1/898adcf9-f391-42f1-b43a-11d1889e4f07').then(response => {
      setSavingsTrends(response.data.monthlySavings);
    });

  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000'];

  return (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            {isDarkTheme ? (
              <div className='content-container'>
                
                <div className='top-content'>
                  <IoIosStats className='content-icons' />
                  <div className='top-content-div-dark'>
                    <h1 className='top-head-dark'>Earnings</h1>
                    <p className='top-para-light'>Rs.600000</p>
                  </div>
                </div>
                <div className='top-content'>
                  <RiMoneyRupeeCircleFill className='content-icons' />
                  <div className='top-content-div-dark'>
                    <h1 className='top-head-dark'>Spend this month</h1>
                    <p className='top-para-light'>Rs.22000</p>
                  </div>
                </div>
                <div className='top-content'>
                  <RiMoneyRupeeCircleFill className='content-icons' />
                  <div className='top-content-div-dark'>
                    <h1 className='top-head-dark'>Your balance</h1>
                    <p className='top-para-light'>Rs.30000</p>
                  </div>
                </div>
                <div className='top-content'>
                  <FcMoneyTransfer className='content-icons' />
                  <div className='top-content-div-dark'>
                    <h1 className='top-head-dark'>Loans Payment</h1>
                    <p className='top-para-light'>Rs.85000</p>
                  </div>
                </div>
                <div className="dashboard-container-dark">
                
                <section className="section-container-dark">
                  <h2 className='section-head-dark'>Monthly Expenses</h2>
                  <div className="chart-container">
                    <BarChart className="bar-chart" width={400} height={300} data={monthlyExpenses} loading="lazy">
                      <CartesianGrid strokeDasharray="0.5 0.5" />
                      <XAxis dataKey="month" style={{color: "white"}} />
                      <YAxis style={{color: "white"}} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="amount" fill="#8884d8" />
                    </BarChart>
                  </div>
                </section>
                </div>
                <div className="dashboard-container-dark">
                <section className="section-container-dark">
                  <h2 className='section-head-dark'>Expense Categories</h2>
                  <div className="chart-container">
                    <PieChart className="pie-chart" width={470} height={400} >
                      <Pie data={expenseCategories} dataKey="amount" nameKey="category" cx="30%" cy="30%" outerRadius={100} fill="#8884d8" label loading="lazy">
                        {expenseCategories.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </div>
                </section>
                </div>
                <div className='dashboard-container-dark'>
                <section className="section-container-dark">
                  <h2 className='section-head-dark'>Investment Performance</h2>
                  <div className="chart-container">
                    <LineChart className="line-chart" width={400} height={300} data={investmentPerformance} loading="lazy">
                      <CartesianGrid strokeDasharray="1 1" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="value" stroke="#150b3e" />
                    </LineChart>
                  </div>
                </section>
                </div>
                <div className='dashboard-container-dark'>
                <section className="section-container-dark">
                  <h2 className='section-head-dark'>Yearly Income</h2>
                  <div className="chart-container">
                    <BarChart className="bar-chart" width={400} height={300} data={yearlyIncome} loading="lazy">
                      <CartesianGrid strokeDasharray="0.5 0.5" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="income" fill="#82ca9d" />
                    </BarChart>
                  </div>
                </section>
              </div>
              <div className='dashboard-container-dark'>
                <section className="section-container-dark">
                  <h2 className='section-head-dark'>Savings Trends</h2>
                  <div className="chart-container">
                    <LineChart className="line-chart" width={400} height={300} data={savingsTrends} loading="lazy">
                      <CartesianGrid strokeDasharray="0.5 0.5" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="savings" stroke="#82ca9d" />
                    </LineChart>
                  </div>
                </section>
              </div>
              <div className='dashboard-container-dark'>
                <section className="section-container-dark">
                  <div className='check-div'>
                  <div className="task-div" >
                    <input type="checkbox" checked />
                    <h2 className='section-head-dark' style={{marginLeft: "10px"}}>Tasks</h2>
                  </div>
                  <HiDotsHorizontal /> 
                  </div>
                  
                  <div className="chart-containers">
                    <div className='check-div'>
                    <div className='task-div'>
                      <input type='checkbox' id="1" />
                      <label className='check-para' htmlFor="1">Rent Payment</label>
                    </div>
                        <RxDragHandleDots2 />
                    </div>
                    <div className='check-div'>
                    <div className='task-div'>
                      <input type='checkbox' id="2" />
                      <label className='check-para' htmlFor="2">Expenses</label>
                    </div>
                    <RxDragHandleDots2 /> 
                    </div>
                    <div className='check-div'>
                    <div className='task-div'>
                      <input type='checkbox' id="3" />
                      <label className='check-para' htmlFor="3">Loan Payment</label>
                    </div>
                    <RxDragHandleDots2 />
                    </div>
                    <div className='check-div'>
                    <div className='task-div'>
                      <input type='checkbox' id="4" />
                      <label className='check-para' htmlFor="4">Other Payments</label>
                    </div>
                    <RxDragHandleDots2 />
                    </div>
                    <div className='check-div'>
                    <div className='task-div'>
                      <input type='checkbox' id="5" />
                      <label className='check-para' htmlFor="5">Credit Card Bills</label>
                    </div>
                    <RxDragHandleDots2 />
                    </div>
                  </div>
                </section>
              </div>
            </div>
              ) : (
                <div className='content-container'>
                  <div className='top-content-light'>
                    <IoIosStats className='content-icons-light' />
                  <div className='top-content-div-dark'>
                    <h1 className='top-head-light'>Earnings</h1>
                    <p className='top-para-light'>Rs.600000</p>
                  </div>
                  </div>
                  <div className='top-content-light'>
                    <RiMoneyRupeeCircleFill className='content-icons-light' />
                    <div className='top-content-div-dark'>
                      <h1 className='top-head-light'>Spend this month</h1>
                      <p className='top-para-light'>Rs.22000</p>
                    </div>
                  </div>
                  <div className='top-content-light'>
                    <RiMoneyRupeeCircleFill className='content-icons-light' />
                    <div className='top-content-div-dark'>
                      <h1 className='top-head-light'>Your balance</h1>
                      <p className='top-para-light'>Rs.30000</p>
                    </div>
                  </div>
                  <div className='top-content-light'>
                    <FcMoneyTransfer className='content-icons-light' />
                    <div className='top-content-div-dark'>
                      <h1 className='top-head-light'>Loans Payment</h1>
                      <p className='top-para-light'>Rs.85000</p>
                    </div>
                  </div>
                  <div className="dashboard-container-light">
                    

                    <section className="section-container-light">
                      <h2 className='section-head-light'>Monthly Expenses</h2>
                      <div className="chart-container">
                        <BarChart className="bar-chart" width={400} height={300} data={monthlyExpenses} loading="lazy">
                          <CartesianGrid strokeDasharray="0.5 0.5" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="amount" fill="#8884d8" />
                        </BarChart>
                      </div>
                    </section>
                  </div>
                  <div className="dashboard-container-light">
                    <section className="section-container-light">
                      <h2 className='section-head-light'>Expense Categories</h2>
                      <div className="chart-container">
                        <PieChart className="pie-chart" width={400} height={400} >
                          <Pie data={expenseCategories} dataKey="amount" nameKey="category" cx="30%" cy="30%" outerRadius={100} fill="#8884d8" label loading="lazy">
                            {expenseCategories.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </div>
                    </section>
                  </div>
                  <div className='dashboard-container-light'>
                  <section className="section-container-light">
                    <h2 className='section-head-light'>Investment Performance</h2>
                    <div className="chart-container">
                      <LineChart className="line-chart" width={400} height={300} data={investmentPerformance} loading="lazy">
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="value" stroke="#150b3e" />
                      </LineChart>
                    </div>
                  </section>
                </div>
                <div className='dashboard-container-light'>
                <section className="section-container-light">
                  <h2 className='section-head-light'>Yearly Income</h2>
                  <div className="chart-container">
                    <BarChart className="bar-chart" width={400} height={300} data={yearlyIncome} loading="lazy">
                      <CartesianGrid strokeDasharray="0.5 0.5" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="income" fill="#82ca9d" />
                    </BarChart>
                  </div>
                </section>
              </div>
              <div className='dashboard-container-light'>
                <section className="section-container-light">
                  <h2 className='section-head-light'>Savings Trends</h2>
                  <div className="chart-container">
                    <LineChart className="line-chart" width={400} height={300} data={savingsTrends} loading="lazy">
                      <CartesianGrid strokeDasharray="0.5 0.5" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="savings" stroke="#82ca9d" />
                    </LineChart>
                  </div>
                </section>
              </div>
              <div className='dashboard-container-light'>
                <section className="section-container-light">
                  <div className='check-div'>
                  <div className="task-div" >
                    <input type="checkbox" checked />
                    <h2 className='section-head-light' style={{marginLeft: "10px"}}>Tasks</h2>
                  </div>
                  <HiDotsHorizontal /> 
                  </div>
                  
                  <div className="chart-containers">
                    <div className='check-div'>
                    <div className='task-div'>
                      <input type='checkbox' id="1" />
                      <label className='check-para' htmlFor='1'>Rent Payment</label>
                    </div>
                        <RxDragHandleDots2 />
                    </div>
                    <div className='check-div'>
                    <div className='task-div'>
                      <input type='checkbox' id="2"/>
                      <label className='check-para' htmlFor='2'>Expenses</label>
                    </div>
                    <RxDragHandleDots2 /> 
                    </div>
                    <div className='check-div'>
                    <div className='task-div'>
                      <input type='checkbox' id="3" />
                      <label className='check-para' htmlFor='3'>Loan Payment</label>
                    </div>
                    <RxDragHandleDots2 />
                    </div>
                    <div className='check-div'>
                    <div className='task-div'>
                      <input type='checkbox' id="4" />
                      <label className='check-para' htmlFor='4'>Other Payments</label>
                    </div>
                    <RxDragHandleDots2 />
                    </div>
                    <div className='check-div'>
                    <div className='task-div'>
                      <input type='checkbox' id="5" />
                      <label className='check-para' htmlFor='5'>Credit Card Bills</label>
                    </div>
                    <RxDragHandleDots2 />
                    </div>
                  </div>
                </section>
              </div>
              </div>
            )}
          </>
        )
      }}
    </AppContext.Consumer>
  )
    
};

export default Content;
