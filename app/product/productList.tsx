// export default function ProductList() {
//     return (
//       <ul>
//         <li>iPad / 20000</li>
//         <li>iPhone X / 30000</li>
//       </ul>
//     );
//   }

// export default function ProductList() {
//     let products = [
//       { desc: "iPad", price: 20000 },
//       { desc: "iPhone X", price: 30000 }
//     ];
//     return (
//       <div>{products + ""}</div>
//     );
//   }

// export default function ProductList() {
//     let products = [
//       { desc: "iPad", price: 20000 },
//       { desc: "iPhone X", price: 30000 }
//     ];
//     return (
//       <div>
//         <ul>
//           {products.map((product) => <li>{product.desc} / {product.price}</li>)}</ul>
//       </div>
//     );
//   }

// export default function ProductList() {
//     const products = [
//         { desc: "iPad", price: 20000 },
//         { desc: "iPhone 8", price: 20000 },
//         { desc: "iPhone X", price: 30000 }
//     ];
//     return (
//         <div>
//             <ul>
//                 {products.map((product) => <li key={product.desc}>{product.desc} / {product.price}</li>)}</ul>
//         </div>
//     );
// }

// import { List, ListItem, ListItemText } from "@mui/material";

// export default function ProductList() {
//   const products = [
//     { desc: "iPad", price: 20000 },
//     { desc: "iPhone 8", price: 20000 },
//     { desc: "iPhone X", price: 30000 }
//   ];
//   return (
//     <div>
//       <List subheader="Product list" aria-label="product list">
//         {products.map((product) =>
//           <ListItem divider key={product.desc}>
//             <ListItemText primary={product.desc} secondary={product.price}>
//             </ListItemText>
//           </ListItem>)}
//       </List>
//     </div>
//   );
// }

// 9/25的作業與進度
// 'use client';
// import {useState} from 'react';
// import { Box, Container, List, ListItemButton, ListItemText } from "@mui/material";
// // import { lightBlue } from "@mui/material/colors";

// export default function ProductList() {
//   const [selectedIndex, setSelectedIndex] = useState(-1);

//   const handleListItemClick = (
//     event: React.MouseEvent<HTMLDivElement, MouseEvent>,
//     index: number,
//   ) => {
//     setSelectedIndex(index);
//   };
//   const products = [
//     { desc: "iPad", price: 20000 },
//     { desc: "iPhone 8", price: 20000 },
//     { desc: "iPhone X", price: 30000 }
//   ];
//   return (
//     <Container maxWidth="sm">
//     <Box>
//       <List subheader="Product list" aria-label="product list">
//         {products.map((product, index) =>
//           <ListItemButton divider key={product.desc}
//             selected={selectedIndex === index}
//             onClick={(event) => handleListItemClick(event, index)}
//           >
//             <ListItemText primary={product.desc} secondary={product.price}>
//             </ListItemText>
//           </ListItemButton>)}
//       </List>
//     </Box>
//     </Container>
//   );
// }


// React form 在10/2颱風假前的練習，後來教授好像就又調整教材了
// 'use client';
// import { useState } from 'react';
// import { Box, Container, List, ListItemButton, ListItemText } from "@mui/material";
// // import { lightBlue } from "@mui/material/colors";

// export default function ProductList() {
//   const [products, setProducts] = useState([
//     { desc: "iPad", price: 20000 },
//     { desc: "iPhone 8", price: 20000 },
//     { desc: "iPhone X", price: 30000 }
//   ]);
//   const [newProduct, setNewProduct] = useState({ visible: false, desc: "", price: 0 })
//   const handleClick = function (e: React.ChangeEvent<HTMLInputElement>) {
//     setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
//   }
//   const show = () => {
//     setNewProduct({ ...newProduct, visible: true })
//   }
//   function update() {
//     setProducts(() => [...products, newProduct]);
//     setNewProduct({ ...newProduct, visible: false })
//     console.log(products);
//   }

//   const [selectedIndex, setSelectedIndex] = useState(-1);
//   const handleListItemClick = (
//     event: React.MouseEvent<HTMLDivElement, MouseEvent>,
//     index: number,
//   ) => {
//     setSelectedIndex(index);
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box sx={{
//         width: '80vw',
//         height: '100vh',
//         backgroundColor: 'background.paper',
//         color: 'black',
//         textAlign: 'left'
//       }}>
//         {newProduct.visible ?
//           <div>
//             產品描述:<input type="text" name="desc" value={newProduct.desc} onChange={handleClick} /><br />
//             產品價格:<input type="number" name="price" value={newProduct.price} onChange={handleClick} /><br />
//             <button onClick={update}>新增</button>
//           </div>
//           :
//           <div>
//             <button onClick={show}>新增產品</button>
//             <List subheader="Product list" aria-label="product list">
//               {products.map((product, index) =>
//                 <ListItemButton divider key={product.desc}
//                   selected={selectedIndex === index}
//                   onClick={(event) => handleListItemClick(event, index)}
//                 >
//                   <ListItemText primary={product.desc} secondary={product.price}>
//                   </ListItemText>
//                 </ListItemButton>)}
//             </List>
//           </div>
//         }
//       </Box>
//     </Container>
//   );
// }



// 預習React Form的部分
// 'use client'
// import { Box, List, ListItem, ListItemText } from "@mui/material";
// import { useState } from "react";

// export default function ProductList() {
//   const [products, setProducts] = useState([
//     { desc: "iPad", price: 20000 },
//     { desc: "iPhone 8", price: 20000 },
//     { desc: "iPhone X", price: 30000 }
//   ])
//   const [newProduct, setNewProduct] = useState({ visible: false, desc: "", price: 0 })
//   const handleClick = function (e: React.ChangeEvent<HTMLInputElement>) {
//     setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
//   }
//   const show = () => {
//     setNewProduct({ ...newProduct, visible: true })
//   }
//   function update() {
//     setProducts(() => [...products, newProduct]);
//     setNewProduct({ ...newProduct, visible: false })
//     console.log(products);
//   }
//   return (
//     <Box sx={{
//       width: '80vw',
//       height: '100vh',
//       backgroundColor: 'background.paper',
//       color: 'black',
//       textAlign: 'left'
//     }}>
//       {newProduct.visible ?
//         <div>
//           產品描述:<input type="text" name="desc" value={newProduct.desc} onChange={handleClick} /><br />
//           產品價格:<input type="number" name="price" value={newProduct.price} onChange={handleClick} /><br />
//           <button onClick={update}>新增</button>
//         </div>
//         :
//         <div>
//           <button onClick={show}>新增產品</button>
//           <List subheader="Product list" aria-label="product list">
//             {products.map((product) =>
//               <ListItem divider key={product.desc}>
//                 <ListItemText primary={product.desc} secondary={product.price}>
//                 </ListItemText>
//               </ListItem>)}
//           </List>
//         </div>
//       }
//     </Box>
//   );
// }



// 10/9 React Form本來的作業要修改刪除、修改
// 'use client';
// import { useState } from 'react';
// import { Box, Container, Button, List, ListItemButton, ListItemText, TextField, Dialog } from "@mui/material";
// import { DialogTitle, DialogContent, DialogActions, IconButton, Fab } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit'
// // import { lightBlue } from "@mui/material/colors";

// export default function ProductList() {
//   const [selectedIndex, setSelectedIndex] = useState(-1);

//   const handleListItemClick = (
//     event: React.MouseEvent<HTMLDivElement, MouseEvent>,
//     index: number,
//   ) => {
//     setSelectedIndex(index);
//   };
//   const [products, setProducts] = useState([
//     { desc: "iPad", price: 20000 },
//     { desc: "iPhone 8", price: 20000 },
//     { desc: "iPhone X", price: 30000 }
//   ])

//   const [newProduct, setNewProduct] = useState({ desc: "", price: 0 })
//   const handleClick = function (e: React.ChangeEvent<HTMLInputElement>) {
//     setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
//   }
//   const [visible, setVisible] = useState(false);
//   const show = () => {
//     setVisible(true);
//   }
//   const hide = () => {
//     setVisible(false)
//   }
//   function update() {
//     setProducts(() => [...products, newProduct]);
//     setVisible(false);
//     console.log(products);
//   }
//   function Delete() {
//     products.pop();
//     setProducts
//     console.log(products);
//   }
//   function ProductAdd() {

//     return (
//       <Box>
//         <Dialog open={visible} onClose={hide} aria-labelledby="新增產品">
//           <DialogTitle>新增產品</DialogTitle>
//           <DialogContent>
//             <TextField label="產品描述" variant="outlined" name="desc" value={newProduct.desc} onChange={handleClick} /><br />
//             <TextField label="產品價格" variant="outlined" name="price" value={newProduct.price} onChange={handleClick} /><br />
//           </DialogContent>
//           <DialogActions>
//             <IconButton
//               aria-label="close"
//               onClick={hide}
//               sx={{
//                 position: 'absolute',
//                 right: 8,
//                 top: 8,
//               }}
//             >
//               <CloseIcon />
//             </IconButton>
//             <Button variant="contained" color="primary" onClick={update}>新增</Button>
//           </DialogActions>
//         </Dialog>
//       </Box>
//     )
//   }
//   return (
//     <Container maxWidth="sm">
//       {!visible ?
//         <Box>       
//           <List subheader="Product list" aria-label="product list">
//             {products.map((product, index) =>
//               <ListItemButton
//                 selected={selectedIndex === index}
//                 onClick={(event) => handleListItemClick(event, index)}
//                 divider key={product.desc}>
//                 <ListItemText primary={product.desc} secondary={product.price}>
//                 </ListItemText>
//               </ListItemButton>)}
//           </List>
//           <Fab color="primary" aria-label="Add" onClick={show}>
//             <AddIcon />
//           </Fab>
//           <IconButton edge="end" aria-label="delete" onClick={Delete}>
//             <DeleteIcon />
//           </IconButton>
//           <IconButton edge="end" aria-label="edit">
//             <EditIcon />
//           </IconButton>
//         </Box> :
//         <ProductAdd />}
//     </Container>
//   );
// }

// 

// chatgpt萬歲
'use client';
import { useState } from 'react';
import { Box, Container, Button, List, ListItemButton, ListItemText, TextField, Dialog } from "@mui/material";
import { DialogTitle, DialogContent, DialogActions, IconButton, Fab } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

export default function ProductList() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  const [products, setProducts] = useState([
    { desc: "iPad", price: 20000 },
    { desc: "iPhone 8", price: 20000 },
    { desc: "iPhone X", price: 30000 }
  ]);

  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  return (
    <Container maxWidth="sm">
      {!visible ? (
        <Box>
          <List subheader="Product list" aria-label="product list">
            {products.map((product, index) =>
              <ListItemButton
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
                divider key={product.desc}>
                <ListItemText primary={product.desc} secondary={product.price} />
              </ListItemButton>
            )}
          </List>
          <Fab color="primary" aria-label="Add" onClick={show}>
            <AddIcon />
          </Fab>
        </Box>
      ) : (
        <ProductAdd
          products={products}
          setProducts={setProducts}
          visible={visible}
          setVisible={setVisible}
        />
      )}
    </Container>
  );
}

function ProductAdd({ products, setProducts, visible, setVisible }) {
  const [newProduct, setNewProduct] = useState({ desc: "", price: 0 });

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const hide = () => {
    setVisible(false);
  };

  const update = () => {
    setProducts([...products, newProduct]);
    setVisible(false);
    setNewProduct({ desc: "", price: 0 }); // 重置表單
  };

  return (
    <Box>
      <Dialog open={visible} onClose={hide} aria-labelledby="新增產品">
        <DialogTitle>新增產品</DialogTitle>
        <DialogContent>
          <TextField
            label="產品描述"
            variant="outlined"
            name="desc"
            value={newProduct.desc}
            onChange={handleClick}
            fullWidth
            margin="normal"
          />
          <TextField
            label="產品價格"
            variant="outlined"
            name="price"
            value={newProduct.price}
            onChange={handleClick}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <IconButton
            aria-label="close"
            onClick={hide}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Button variant="contained" color="primary" onClick={update}>新增</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
