# 📊 MongoDB Aggregation Framework

## 🧠 What is Aggregation?

Aggregation in MongoDB is a powerful way to process data and return computed results. It works by passing documents through a pipeline that transforms the data into an aggregated result.

---

## 🔧 Aggregation Pipeline

The aggregation pipeline is a framework for data aggregation modeled on the concept of data processing pipelines. Documents enter a multi-stage pipeline that can transform them and output the aggregated result.

Each stage transforms the documents as they pass through the pipeline. Common stages include:

---

### 1. `$match` – Filter Documents

Filters the documents to pass only those that match the specified condition(s):

```js
{
  $match: {
    status: "Delivered"
  }
}
```

---

### 2. `$group` – Group and Aggregate

Groups input documents by a specified identifier and applies accumulator expressions like `$sum`, `$avg`, etc.:

```js
{
  $group: {
    _id: "$customerName",
    totalSpent: { $sum: "$totalAmount" }
  }
}
```

---

### 3. `$project` – Shape Output

Used to include, exclude, or create new fields:

```js
{
  $project: {
    productName: "$items.productName"
  }
}
```

---

### 4. `$sort` – Sort Results

Sorts documents in the pipeline:

```js
{
  $sort: {
    totalAmount: -1
  }
}
```

---

### 5. `$limit` – Limit Documents

Limits the number of documents passed to the next stage:

```js
{
  $limit: 5
}
```

---

### 6. `$unwind` – Deconstruct Arrays

Deconstructs an array field to output a document for each element:

```js
{
  $unwind: "$items"
}
```

---

## 💡 Example Use Cases

- Calculating total revenue 
- Finding top customers 
- Listing monthly sales 
- Analyzing product performance 

---

## ✅ Benefits

- Simplifies complex data transformations 
- Reduces need for multiple queries or application-side processing 
- Increases performance for data analytics 

---

## 🧾 Conclusion

MongoDB’s aggregation framework is an efficient and flexible way to perform data analysis directly within the database. By chaining multiple stages in a pipeline, you can extract meaningful insights and summaries from your data.
