import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { BsCashCoin } from "react-icons/bs";
import { FaUsers, FaTruck, FaCartPlus } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Pie, PieChart, Legend, } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    })

    // chart data
    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats')
            return res.data
        }
    })


    // Line chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // Custome Pie Chart
    const RADIAN = Math.PI / 180;
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
        const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${((percent ?? 1) * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.revenue }
    })

    return (
        <div className="max-w-10/12 mx-auto">
            <h2 className="text-2xl font-semibold uppercase">
                {
                    user ? <span>Welcome {user.displayName}</span> : <span>Admin Home</span>
                }
            </h2>
            {/* Stat */}
            <div className="mt-10 grid grid-cols-4 gap-5">
                {/* stat 1 */}
                <div className="flex items-center gap-5 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] p-10 text-white rounded-2xl">
                    <div>
                        <BsCashCoin className="text-3xl"></BsCashCoin>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">${stats.revenue}</h2>
                        <p className="text-xl font-bold">Revenue</p>
                    </div>
                </div>
                {/* stat 2 */}
                <div className="flex items-center gap-5 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] p-10 text-white rounded-2xl">
                    <div>
                        <FaUsers className="text-3xl"></FaUsers>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">${stats.users}</h2>
                        <p className="text-xl font-bold">Users</p>
                    </div>
                </div>
                {/* stat 3 */}
                <div className="flex items-center gap-5 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] p-10 text-white rounded-2xl">
                    <div>
                        <FaCartPlus className="text-3xl"></FaCartPlus>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">${stats.menuItems}</h2>
                        <p className="text-xl font-bold">Products</p>
                    </div>
                </div>
                {/* stat 4 */}
                <div className="flex items-center gap-5 bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] p-10 text-white rounded-2xl">
                    <div>
                        <FaTruck className="text-3xl"></FaTruck >
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">${stats.orders}</h2>
                        <p className="text-xl font-bold">Orders</p>
                    </div>
                </div>
            </div>
            {/* Chart Data */}
            <div className="flex items-center gap-10 mt-10">
                <div>
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>

        </div>
    );
};

export default AdminHome;