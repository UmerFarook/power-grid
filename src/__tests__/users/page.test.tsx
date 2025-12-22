import {fireEvent, render,screen, waitFor } from "@testing-library/react";
import Users from "../../app/users/page";

global.fetch = jest.fn();
beforeEach(() => {
    (fetch as jest.Mock).mockResolvedValue({
        json: async () => ({
            users: [
                {
                    id: '1',
                    name: 'John Doe',
                    email: 'john@example.com',
                    address: { street: 'Main Street' },
                },
            ],
        }),
    });
});

afterEach(() => {
    jest.clearAllMocks();
});

describe('testing the fetech request',()=>{
    test('test fetch',async ()=>{



        let Component = await Users();
        render(Component);


        expect(screen.getByText('Salam')).toBeInTheDocument();

        expect(screen.getByText("John Doe")).toBeInTheDocument();
    })
})