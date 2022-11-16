import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppButton from "../components/AppButton";
import AppSpinner from "../components/AppSpinner";
import AppInput from "../components/Forms/AppInput";
import Form from "../components/Forms/Form";
import {
  asyncEditItem,
  asyncPostItems,
  RemoveEditItem,
} from "../redux/Features/ItemsSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import FileBase from "react-file-base64";

const AddPost = () => {
  const { loading, editItems } = useSelector((state) => state.ItemsSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(editItems);
  const [UploadData, setUploadData] = useState({
    name: "",
    price: "",
    img: "",
    imgPrv: {},
  });
  const { name, price, img, imgPrv } = UploadData;
  console.log(editItems?.id);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !img) return toast.error("please enter values");
    const fd = new FormData();
    fd.append("name", name);
    fd.append("price", price);
    fd.append("image", img);

    // dispatch(asyncPostItems({ name, price, img: img, toast }));
    if (!editItems) {
      dispatch(
        asyncPostItems({ name, price, img: `./img/${img.name}`, toast })
      );
      setUploadData({
        name: "",
        price: "",
        img: "",
        imgPrv: {},
      });
    } else {
      dispatch(
        asyncEditItem({
          id: editItems?.id,
          name,
          price,
          img: `./img/${img.name}`,
          toast,
          navigate,
        })
      );
      setUploadData({
        name: "",
        price: "",
        img: "",
        imgPrv: {},
      });
    }
    dispatch(RemoveEditItem());
  };

  useEffect(() => {
    setUploadData({ ...editItems });
  }, [editItems]);
  // const handleChange = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     return setUploadData({
  //       ...UploadData,

  //       img: reader.result,

  //       imgPrv: URL.createObjectURL(e.target.files[0]),
  //     });
  //   };
  // };

  return (
    <div className="flex justify-center items-center bg-gray-100 h-[90vh]">
      <Form style={"gap-4"}>
        <AppInput
          placeholder={"fatherName"}
          value={UploadData.name}
          type="text"
          onChange={(e) =>
            setUploadData({ ...UploadData, name: e.target.value })
          }
        />
        <AppInput
          placeholder={"price"}
          value={UploadData.price}
          type="number"
          onChange={(e) =>
            setUploadData({ ...UploadData, price: e.target.value })
          }
        />
        <AppInput
          placeholder={"img"}
          type="file"
          onChange={(e) =>
            setUploadData({
              ...UploadData,
              img: e.target.files[0],
              imgPrv: URL.createObjectURL(e.target.files[0]),
            })
          }
        />
        {/* <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setUploadData({ ...UploadData, img: base64 })}
        /> */}
        <AppButton style={"bg-blue-700 hover:bg-blue-600 "} onClick={onSubmit}>
          {/* {loading ? <AppSpinner /> : "Add"} */}
          {editItems ? "Edit Item" : "Add Item"}
        </AppButton>
        {UploadData.img ? (
          <img src={UploadData.imgPrv} className="h-10 w-20 " alt="" />
        ) : (
          ""
        )}
      </Form>
    </div>
  );
};

export default AddPost;
