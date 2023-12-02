import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const Data = () => {

    const [posts, setPosts] = useState([]);
    const [userOnePosts, setUserOnePosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const allPosts = response.data;
                const filteredPosts = allPosts.filter(post => post.userId === 1);
                setPosts(allPosts);
                setUserOnePosts(filteredPosts);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);



    const pieData = [
        { name: 'User 1 Posts', value: userOnePosts.length },
        { name: 'Other Posts', value: posts.length - userOnePosts.length },
    ];

    return (
        <div className='min-h-[100vh] pt-[100px] flex flex-col items-center justify-center gap-10 pb-[50px]'>

            <div className='border border-[#F9FD6D] rounded-2xl px-10 py-4 text-center'>
                <h4 className='text-5xl text-[#F9FD6D]'>{posts.length}</h4>
                <p className='text-xl text-white'>Posts</p>
            </div>

            <hr className='border-[1px] w-3/4 border-[#F9FD6D]' />


            <div className='w-[90%] bg-gray-300 p-5 space-y-2 rounded-3xl'>
                <h2 className='text-black font-semibold text-xl'>User Posts</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userOnePosts.map(post => (
                            <tr key={post.id} >
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='flex flex-col items-center bg-gray-300 rounded-3xl px-10'>
                <h2 className='text-black font-semibold text-xl'>Post Distribution</h2>


                <PieChart width={400} height={400}>
                    <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="value"
                        label={(entry) => entry.name}
                    >
                        {pieData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={index === 0 ? `url(#user-gradient)` : `url(#other-post-gradient)`}
                                stroke="transparent"
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                    {/* Define linear gradients */}
                    <defs>
                        <linearGradient id="user-gradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="rgb(236, 72, 153)" />
                            <stop offset="50%" stopColor="rgb(239, 68, 68)" />
                            <stop offset="100%" stopColor="rgb(234, 179, 8)" />
                        </linearGradient>
                        <linearGradient id="other-post-gradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="rgb(254, 240, 138)" />
                            <stop offset="50%" stopColor="rgb(253, 224, 71)" />
                            <stop offset="100%" stopColor="rgb(250, 204, 21)" />
                        </linearGradient>
                    </defs>
                </PieChart>

            </div>
        </div>

    )
}

export default Data