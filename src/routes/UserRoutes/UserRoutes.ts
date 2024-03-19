import express, { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { promises as fsPromises } from 'fs';
import { Usercontroller } from '../../controller/UserController';
import { verifyToken } from '../../middleware/authentication';

const router: Router = express.Router();

const storage = multer.diskStorage({
    destination: (req: any, file: any, cb: any) => {
        const uploadPath = path.join(__dirname, 'uploads');
        fsPromises.mkdir(uploadPath, { recursive: true }).then(() => {
            cb(null, uploadPath);
        });
    },
    filename: (req: any, file: any, cb: any) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    },
});

const upload = multer({ storage: storage });

router.get('/profile', verifyToken, Usercontroller.getProfile);
router.post('/update', upload.single('profilePicture'), verifyToken, Usercontroller.updateProfile);
router.post('/deleteUser', verifyToken, Usercontroller.deleteUser);

export = router;
