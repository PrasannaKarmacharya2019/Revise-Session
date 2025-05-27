


const posts=[
{
    title:"Post 1",
    descripton:"This is post 1",
    },
{
    title:"Post 2", 
    descripton:"This is post 2",
    },
{
    title:"Post 3", 
    descripton:"This is post 3",
    },
{
    title:"Post 4", 
    descripton:"This is post 4",
    },
]

posts.map((post)=>{
    const list=document.createElement('li');
    const data=document.createTextNode(post.title);
    list.append(data);
    console.log(list);
    document.body.append(list);
})