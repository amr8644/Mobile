package api

type APIError struct {
	Err    string
	Status int
}

func (e APIError) Error() string {
	return e.Err
}