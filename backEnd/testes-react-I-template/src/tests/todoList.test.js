import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import TodoList from "../components/TodoList"

describe("Testes do todo list", ()=>{
    
    test("1.1 - deve renderizar o titulo",()=>{
        render(<TodoList/>)

        const titulo = screen.getByText("Todo List")

        expect(titulo).toBeInTheDocument()
    })

    test("1.2 - o input deve iniciar vazio", ()=>{
        render(<TodoList/>)

        const input = screen.getByPlaceholderText(/enter a todo/i)

        expect(input).toHaveValue("")
    })


    test("2.1 - deve atualizar o valor do input sempre que digitar nele", async ()=>{
        const user = userEvent.setup()

        render(<TodoList/>)

        const input = screen.getByPlaceholderText(/enter a todo/i)

        await user.type(input, "Estudar")

        expect(input).toHaveValue("Estudar")
    })

    test("2.2 - deve renderizar uma nova tarefa ao digitar no input e pressionar a tecla ENTER", async ()=>{
        const user = userEvent.setup()

        render(<TodoList/>)

        const input = screen.getByPlaceholderText(/enter a todo/i)

        await user.type(input, "Estudar{enter}")

        const todoItem = screen.getByText(/estudar/i)

        // screen.logTestingPlaygroundURL()

        expect(todoItem).toBeInTheDocument()
        expect(input).toHaveValue("")
    })

    test("3 - deve alterar o status da tarefa quando o botão de alterar status for clicado", async ()=>{
        const user = userEvent.setup()

        render(<TodoList/>)

        // screen.debug() //1

        const input = screen.getByPlaceholderText(/enter a todo/i)

        await user.type(input, "Comer{enter}")
        // await user.type(input, "Lavar{enter}")

        const todoItem = screen.getByText(/comer/i)

        // screen.logTestingPlaygroundURL()
        const toggleButton = screen.getByRole('button', {name: /toggle/i})

        await user.click(toggleButton)

        // screen.debug() //2
        // screen.logTestingPlaygroundURL()

        expect(todoItem).toBeInTheDocument()
        expect(input).toHaveValue("")

        expect(todoItem).toHaveStyle("text-decoration: line-through")

        await user.click(toggleButton)

        expect(todoItem).toHaveStyle("text-decoration: none")

    })

})