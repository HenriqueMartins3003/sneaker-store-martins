"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import {useRouter} from "next/navigation"
import { createProduct } from '@/Hooks/backend.api';


const CreateNewProduct = () => {
    const { register, handleSubmit } = useForm();
    const router = useRouter();
    
    const handleNewProduct = async (data: any) => {
        
      const {title,description,price,stock,code,thumbmail} = data
          
        const newProduct = await createProduct({title,description,price,code,stock,thumbmail});

        !newProduct  ? router.push("/ProductForm") : router.push("/Item")

        
    }

  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Novo produto
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(handleNewProduct)}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm space-y-2">
            <div>
              <label htmlFor="title" className="sr-only">
                Titulo
              </label>
              <input
                {...register("title")}
                id="title"
                name="title"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Titulo do produto ..."
              />
            </div>
            <div>
              <label htmlFor="Description" className="sr-only">
                Descrição
              </label>
              <input
                {...register("description")}
                id="description"
                name="description"
                type="text"
                autoComplete="description"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Descrição..."
              />
            </div>
            <div>
              <label htmlFor="price" className="sr-only">
                Preço
              </label>
              <input
                {...register("price")}
                id="price"
                name="price"
                type="number"
                autoComplete=""
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Preço..."
              />
            </div>
            <div>
              <label htmlFor="stock" className="sr-only">
                Estoque disponivel
              </label>
              <input
                {...register("stock")}
                id="stock"
                name="stock"
                type="number"
                autoComplete="current-stock"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Estoque..."
              />
            </div>
            <div>
              <label htmlFor="code" className="sr-only">
                Codigo do produto:
              </label>
              <input
                {...register("code")}
                id="code"
                name="code"
                type="text"
                autoComplete="current-code"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Codigo ..."
              />
            </div>
            <div>
              <label htmlFor="thumbmail" className="sr-only">
                URL
              </label>
              <input
                {...register("thumbmail")}
                id="thumbmail"
                name="thumbmail"
                type="thumbmail"
                autoComplete="thumbmail"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Url da Imagem ..."
              />
            </div>

          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-700 hover:sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-sky-900"
            >
              Criar
            </button>
          </div>
        </form>
      </div>
    </div>
  
  )}
export default CreateNewProduct