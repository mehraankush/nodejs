
// named export 
export const add = (a,b) => {
    return (a+b);
}
export const sub = (a,b) => {
    return (a-b);
}
// called default exeport
// export default add;

export default  {
    add:add,
    sub:sub,
}
