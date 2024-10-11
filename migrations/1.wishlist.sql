start transaction;

create table wishlist
(
    id     INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name    varchar not null
);

commit;