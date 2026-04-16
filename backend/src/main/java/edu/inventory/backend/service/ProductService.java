package edu.inventory.backend.service;

import edu.inventory.backend.dto.ProductRequest;
import edu.inventory.backend.model.Product;
import edu.inventory.backend.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class ProductService {

    private static final Logger logger = LoggerFactory.getLogger(ProductService.class);

    private final ProductRepository productRepository;

    public List<Product> getAllProducts() {
        logger.info("Fetching all products");
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        logger.info("Fetching product with id={}", id);
        return productRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Product not found with id: " + id));
    }

    public Product createProduct(ProductRequest request) {
        Product product = Product.builder()
                .name(request.getName())
                .category(request.getCategory())
                .brand(request.getBrand())
                .price(request.getPrice())
                .quantity(request.getQuantity())
                .build();

        Product saved = productRepository.save(product);
        logger.info("Created product with id={}", saved.getId());
        return saved;
    }

    public Product updateProduct(Long id, ProductRequest request) {
        Product product = getProductById(id);

        product.setName(request.getName());
        product.setCategory(request.getCategory());
        product.setBrand(request.getBrand());
        product.setPrice(request.getPrice());
        product.setQuantity(request.getQuantity());

        Product updated = productRepository.save(product);
        logger.info("Updated product with id={}", updated.getId());
        return updated;
    }

    public void deleteProduct(Long id) {
        Product product = getProductById(id);
        productRepository.delete(product);
        logger.info("Deleted product with id={}", id);
    }

    public List<Product> searchProducts(String keyword) {
        logger.info("Searching products with keyword={}", keyword);
        return productRepository.findByNameContainingIgnoreCase(keyword);
    }
}