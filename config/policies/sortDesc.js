module.exports = async (ctx, next) => {
  if (!ctx.query["_sort"]) {
    ctx.query["_sort"] = "id:desc";
  }
  return await next();
};
