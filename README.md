# 🎨 Digital Art Portfolio - React Data Flow

## ✨ Project Evolution

Originally developed as an **e-commerce product page** in class, this project was reimagined into a **personal digital art portfolio**.

Instead of displaying generic products, the application now showcases **original artwork**, transforming:

- Product listings → Art gallery
- Product details → Artwork showcase pages
- Shopping experience → Creative portfolio experience

This shift highlights the ability to **adapt technical concepts into a personal brand and creative direction**.

---

## 🔄 Overview of Data Flow

When a user interacts with the gallery, the following process occurs to fetch and display the correct artwork:

### 1. The Trigger (User Action)

The user clicks on a **"View Details"** button for a specific piece (e.g., Artwork ID: 5).

- **Action:** `useNavigate` hook or `<Link>` updates the browser URL
- **Result:**# /products/5

---

## 2. The Listener (React Router)

The application's router handles dynamic paths.

```jsx
<Route path="products/:productId" element={<ProductDetail />} />
```

- **Action:** React Router detects `:productId` as a dynamic parameter
- **Result:** The value `5` is treated as a variable called `productId`

---

## 3. The Extraction (useParams Hook)

Inside `ProductDetail`, the ID is extracted from the URL.

```jsx
const { productId } = useParams();
```

- **Action:** Retrieves `5` from the URL
- **Result:** Makes it usable inside the component

---

## 4. The Search (JavaScript `.find()`)

The app locates the correct artwork from local data.

```jsx
const product = products.find((p) => String(p.id) === productId);
```

- **Action:** Iterates through the `products` array
- **Result:** Finds the object with matching ID

---

## 5. The Presentation (JSX Rendering)

The matched data is rendered dynamically.

- **Action:** Injects artwork data into UI
- **Example:**
  - `{product.title}` → "Frieren"
  - `{product.image}` → Displays the artwork
  - `{product.tools}` → "Clip Studio Paint"

---

## 🛠 Project Structure

| File                | Purpose                                   |
| ------------------- | ----------------------------------------- |
| `App.jsx`           | Defines routes and dynamic `:productId`   |
| `products.js`       | Source of truth (artwork data array)      |
| `Products.jsx`      | Gallery page displaying all artworks      |
| `ProductDetail.jsx` | Logic hub for displaying a single artwork |

---

## 🏁 Conclusion

This project demonstrates how core React concepts can be applied beyond standard use cases.

**Key Takeaways:**

- Dynamic routing with React Router
- URL-driven state management
- Data lookup using JavaScript methods
- Transforming a template project into a personalized portfolio
