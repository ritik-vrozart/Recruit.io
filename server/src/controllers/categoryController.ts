import prisma from "../config/database";


export const createCategory = async (req: Request, res: any) => {
    try {
        const { name }:any = req.body;
        const category = await prisma.category.create({ data: { name } });
        res.status(201).json({ category });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}


export const getAllCategories = async (req: Request, res: any) => {
    try {
        const categories = await prisma.category.findMany();
        res.status(200).json({ categories });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}
