import { Button, Dropdown, Form, InputGroup } from "react-bootstrap"

export const FilterAndSearchBar = ({ handleFilterTopics, topics, setSearchTerm }) => {
    return (
        <div className="filterAndSearchPosts">
            <Dropdown className="filterPostsDropdown">
                <Dropdown.Toggle className="colorOverride" >Filter Posts</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item key={0} onClick={handleFilterTopics}>All</Dropdown.Item>
                    {topics.map((topic) => {
                        return (
                            <Dropdown.Item key={topic.id} onClick={handleFilterTopics}>{topic.name}</Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
            <InputGroup className="mb-3 searchPosts">
                <Form.Control
                    placeholder="Search Posts By Title"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <Button variant="light colorOverride" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
        </div>
    )
}